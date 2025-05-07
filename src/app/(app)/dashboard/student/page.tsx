'use client'
import ProfileSidebar from "@/components/ProfileSidebar";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";


type FormData = {
    location: string,
    district: string,
    mode: 'offline' | 'online',
    year: string,
    subjects: string,
    salary: string,
    description: string
};
const year = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'Admission']
export default function TutorProfileInputCard() {
    const [subjects, setSubjects] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTuitionLoading, setIsTuitionLoading] = useState(false)
    const [tuitions, setTuitions] = useState([])
    const [currentModalDetails, setCurrentModalDetails] = useState({})
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormData>();
    const router=useRouter()
    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {

        try {
            const values = {
                location: data.location,
                district: data.district,
                mode: data.mode,
                year: data.year,
                subjects: subjects.join(','),
                salary: data.salary,
                description: data.description
            }
            console.log(values);

            const res = await axios.post('/api/tuition/create', values)
            console.log(res.data);
            toast.success('Posted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
            router.push('/tuitions')
        } catch (error) {
            console.log(error);

        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const trimmed = inputValue.trim().toLocaleUpperCase();
            if (trimmed && !subjects.includes(trimmed)) {
                setSubjects([...subjects, trimmed]);
            }
            setInputValue('');
        }
    };

    const removeSubject = (index) => {
        setSubjects(subjects.filter((_, i) => i !== index));
    };
    useEffect(() => {
        const load = async () => {
            try {
                setIsTuitionLoading(true)
                const res = await axios.get('/api/tuition/getbyuser')
                setTuitions(res.data.tuitions)
                console.log(res.data.tuitions);

            } catch (error) {

            } finally {
                setIsTuitionLoading(false)
            }

        }
        load()
    }, [])
    const showModal = (item: any) => {

        setCurrentModalDetails(() => item)


        const modal = document.getElementById('s_modal');
        if (modal) {
            modal.showModal();
        }
    }
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <aside className="w-full md:w-64 bg-base-200 p-6 space-y-4">
                <ProfileSidebar />
            </aside>
            <main className=" flex-1 p-6 my-5">
                <div className="flex flex-col justify-center items-center min-h-screen bg-base-200">
                    <div className="card my-5 w-full max-w-xl bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-center font-bold">All tuition posts</h2>
                            {
                                isTuitionLoading ? <span className="loading loading-lg"></span>:<div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>

                                            <th>Description</th>
                                            <th>Salary</th>
                                            <th> Year</th>
                                            <th>Applications</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* row 2 */}
                                        {
                                            tuitions.length > 0 && tuitions.map(i => (
                                                <tr key={i?.id} className="hover:bg-base-300">

                                                    <td>{i?.description}</td>
                                                    <td>{i?.salary}</td>
                                                    <td>{i?.year}</td>
                                                    <td >
                                                        <button onClick={() => showModal(i)} className="btn bg-primary text-primary-content">See</button>


                                                    </td>
                                                </tr>

                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            }
                            

                        </div>
                    </div>


                    <div className="card w-full max-w-xl bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-center font-bold">Find your desired Tutor</h2>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">

                                {/* Location */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="e.g. Motijhil,Dhaka"
                                        className="input input-bordered"
                                        {...register("location", { required: true })}
                                    />
                                </div>
                                {/* district */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">District</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="e.g. Dhaka"
                                        className="input input-bordered"
                                        {...register("district", { required: true })}
                                    />
                                </div>
                                {/* mode */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Mode</span>
                                    </label>
                                    <br />
                                    <select   {...register("mode", { required: true })} className="select">

                                        <option value='offline'>Offline</option>
                                        <option value='online'>Online</option>

                                    </select>
                                </div>
                                {/* class */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Class</span>
                                    </label>
                                    <br />
                                    <select   {...register("year", { required: true })} className="select">

                                        {
                                            year.map(i => <option value={i} key={i}>{i}</option>)
                                        }

                                    </select>
                                </div>
                                {/* salary */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Salary</span>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="e.g. 5000"
                                        className="input input-bordered"
                                        {...register("salary", { required: true })}
                                    />
                                </div>
                                {/* subjects */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <br />
                                    <div className="flex flex-wrap items-center gap-2 border border-base-300 rounded p-2 bg-base-100 focus-within:ring ring-primary">
                                        {subjects.map((subject, index) => (
                                            <div
                                                key={index}
                                                className="badge badge-accent rounded-lg gap-2"
                                            >
                                                {subject}
                                                <button
                                                    onClick={() => removeSubject(index)}
                                                    className="ml-1 text-white hover:text-red-300"
                                                    type="button"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}


                                    </div>


                                    <input
                                        {...register("subjects", { required: subjects.length <= 0 })}
                                        type="text"
                                        id="subjectsToTeach"
                                        name="subjectsToTeach"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type and press Enter to add"
                                        className="input input-bordered my-2"
                                    />
                                </div>
                                {/* description */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <br />
                                    <textarea
                                        rows={5}
                                        type="text"
                                        placeholder="e.g. 5000"
                                        className="input input-bordered"
                                        {...register("description", { required: true })}
                                    />
                                </div>
                                {/* Submit Button */}
                                <div className="form-control mt-6">
                                    <button disabled={isSubmitting} className="btn btn-primary">Post to find tutor</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Modal
                    currentModalDetails={currentModalDetails}
                />
            </main>
        </div>

    );
}

const Modal = (props) => {
    console.log(props);
    const { currentModalDetails } = props
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleStatus = async (applicationId:any) => {
        try {
            setIsSubmitting(true)
            const data={
                applicationId
            }
            const res = await axios.patch('/api/tuition-application/accept',data)
            console.log(res.data);

        } catch (error) {

        } finally {
            setIsSubmitting(false)
        }
    }
    return (


        <dialog id="s_modal" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">

                <p className="py-4">{currentModalDetails?.description}</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Job</th>
                                <th>Teacher Email</th>
                                <th>Teacher Profile</th>
                                <th>Accept</th>


                            </tr>
                        </thead>
                        <tbody>

                            {/* row 2 */}
                            {
                                currentModalDetails?.applications?.length > 0 && currentModalDetails?.applications.map(i => (
                                    <tr key={i?.id} className="hover:bg-base-300">

                                        <td>{i?.message}</td>
                                        <td>{i?.status}</td>
                                        <td>{i?.tutor?.email}</td>
                                        <td>
                                            <button className="btn">
                                                <Link href={`/${i?.tutor?.email}`}>Profile</Link>
                                            </button>
                                        </td>
                                        <td><button disabled={isSubmitting} className="btn" onClick={() => handleStatus(i?.id)}>Accept</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}