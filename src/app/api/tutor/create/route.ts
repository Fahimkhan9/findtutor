import { PrismaClient } from "@/generated/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient()
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
export async function POST(req: NextRequest) {
    try {
        const { userId } = await getAuth(req)
        if (!userId) {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }
        const formData = await req.formData()
        const institution = formData.get("institution")
        const subjects = formData.get("subjects")
        const location = formData.get("location")
        const year = formData.get("year")
        const sampleTeachingVideo = formData.get("sampleTeachingVideo")
        const subjectToTeach = formData.get("subjectToTeach")
        const name = formData.get("name")
        const email = formData.get("email")
        

        if (!institution || !subjects || !location || !year || !subjectToTeach || !name || !email) {
            return NextResponse.json({ msg: "All fields are required", success: false }, { status: 400 })
        }

        const tutorexists = await prisma.tutor.findFirst({
            where: {
                userId: userId
            }
        })

        if (tutorexists?.id) {
           
            if ((sampleTeachingVideo instanceof File)) {
                const bytes = await sampleTeachingVideo.arrayBuffer();
                const buffer = Buffer.from(bytes)
                const  result = await new Promise((resolve, reject) => {
                    const upload_stream = cloudinary.uploader.upload_stream({
                        folder: 'video-uploads',
                        resource_type: 'video',
                        transformation: [
                            {
                                quality: 'auto',
                                fetch_format: 'mp4'
                            }
                        ]
                    }, (error, result) => {
                        if (error) reject(error)
                        else resolve(result)
                    })
                    upload_stream.end(buffer)
                })
             
                const tutor = await prisma.tutor.update({
                    where: {
                        id: tutorexists?.id
                    },
                    data: {
                        institution: institution.toString() || tutorexists.institution,
                        subjects: subjects.toString() || tutorexists.subjects,
                        location: location.toString() || tutorexists.location,
                        year: year.toString() || tutorexists.year,
                        sampleTeachingVideo: String(result?.secure_url) || tutorexists.sampleTeachingVideo,
                        subjectToTeach: subjectToTeach.toString() || tutorexists.subjectToTeach,
                        email: email.toString() || tutorexists.email,
                        name: name.toString() || tutorexists.name,
                        userId: userId.toString() || tutorexists.userId
                    }
                })
                return NextResponse.json({ msg: "Tutor updated successfully", tutor, success: true }, { status: 200 })
            }
            
            
            const tutor = await prisma.tutor.update({
                where: {
                    id: tutorexists?.id
                },
                data: {
                    institution: institution.toString() || tutorexists.institution,
                    subjects: subjects.toString() || tutorexists.subjects,
                    location: location.toString() || tutorexists.location,
                    year: year.toString() || tutorexists.year,
                    sampleTeachingVideo: tutorexists.sampleTeachingVideo,
                    subjectToTeach: subjectToTeach.toString() || tutorexists.subjectToTeach,
                    email: email.toString() || tutorexists.email,
                    name: name.toString() || tutorexists.name,
                    userId: userId.toString() || tutorexists.userId
                }
            })
            return NextResponse.json({ msg: "Tutor updated successfully", tutor, success: true }, { status: 200 })
        } else {
            if ((sampleTeachingVideo instanceof File)) {
                const bytes = await sampleTeachingVideo.arrayBuffer();
                const buffer = Buffer.from(bytes)
                const result = await new Promise((resolve, reject) => {
                    const upload_stream = cloudinary.uploader.upload_stream({
                        folder: 'video-uploads',
                        resource_type: 'video',
                        transformation: [
                            {
                                quality: 'auto',
                                fetch_format: 'mp4'
                            }
                        ]
                    }, (error, result) => {
                        if (error) reject(error)
                        else resolve(result)
                    })
                    upload_stream.end(buffer)
                })
              
                const tutor = await prisma.tutor.create({
                    data: {
                        institution: institution.toString(),
                        subjects: subjects.toString(),
                        location: location.toString(),
                        year: year.toString(),
                        sampleTeachingVideo: '',
                        subjectToTeach: subjectToTeach.toString(),
                        email: email.toString(),
                        name: name.toString(),
                        userId: userId.toString()
    
                    }
                })
                return NextResponse.json({ msg: "Tutor updated successfully", tutor, success: true }, { status: 200 })
            }


            const tutor = await prisma.tutor.create({
                data: {
                    institution: institution.toString(),
                    subjects: subjects.toString(),
                    location: location.toString(),
                    year: year.toString(),
                    sampleTeachingVideo: String(result?.secure_url) || '',
                    subjectToTeach: subjectToTeach.toString(),
                    email: email.toString(),
                    name: name.toString(),
                    userId: userId.toString()

                }
            })
            return NextResponse.json({ msg: "Tutor updated successfully", tutor, success: true }, { status: 200 })
        }


    } catch (error: any) {
        console.log(error);

        return NextResponse.json({ msg: "Error creating tutor", success: false }, { status: 500 })
    }
}