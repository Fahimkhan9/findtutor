
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tutor
 * 
 */
export type Tutor = $Result.DefaultSelection<Prisma.$TutorPayload>
/**
 * Model Tuition
 * 
 */
export type Tuition = $Result.DefaultSelection<Prisma.$TuitionPayload>
/**
 * Model TuitionApplication
 * 
 */
export type TuitionApplication = $Result.DefaultSelection<Prisma.$TuitionApplicationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tutors
 * const tutors = await prisma.tutor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tutors
   * const tutors = await prisma.tutor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tutor`: Exposes CRUD operations for the **Tutor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutors
    * const tutors = await prisma.tutor.findMany()
    * ```
    */
  get tutor(): Prisma.TutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tuition`: Exposes CRUD operations for the **Tuition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tuitions
    * const tuitions = await prisma.tuition.findMany()
    * ```
    */
  get tuition(): Prisma.TuitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tuitionApplication`: Exposes CRUD operations for the **TuitionApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TuitionApplications
    * const tuitionApplications = await prisma.tuitionApplication.findMany()
    * ```
    */
  get tuitionApplication(): Prisma.TuitionApplicationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tutor: 'Tutor',
    Tuition: 'Tuition',
    TuitionApplication: 'TuitionApplication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tutor" | "tuition" | "tuitionApplication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tutor: {
        payload: Prisma.$TutorPayload<ExtArgs>
        fields: Prisma.TutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          findFirst: {
            args: Prisma.TutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          findMany: {
            args: Prisma.TutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>[]
          }
          create: {
            args: Prisma.TutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          createMany: {
            args: Prisma.TutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>[]
          }
          delete: {
            args: Prisma.TutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          update: {
            args: Prisma.TutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          deleteMany: {
            args: Prisma.TutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>[]
          }
          upsert: {
            args: Prisma.TutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          aggregate: {
            args: Prisma.TutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutor>
          }
          groupBy: {
            args: Prisma.TutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorCountArgs<ExtArgs>
            result: $Utils.Optional<TutorCountAggregateOutputType> | number
          }
        }
      }
      Tuition: {
        payload: Prisma.$TuitionPayload<ExtArgs>
        fields: Prisma.TuitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TuitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TuitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload>
          }
          findFirst: {
            args: Prisma.TuitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TuitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload>
          }
          findMany: {
            args: Prisma.TuitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload>[]
          }
          create: {
            args: Prisma.TuitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload>
          }
          createMany: {
            args: Prisma.TuitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TuitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload>[]
          }
          delete: {
            args: Prisma.TuitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload>
          }
          update: {
            args: Prisma.TuitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload>
          }
          deleteMany: {
            args: Prisma.TuitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TuitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TuitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload>[]
          }
          upsert: {
            args: Prisma.TuitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPayload>
          }
          aggregate: {
            args: Prisma.TuitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTuition>
          }
          groupBy: {
            args: Prisma.TuitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TuitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TuitionCountArgs<ExtArgs>
            result: $Utils.Optional<TuitionCountAggregateOutputType> | number
          }
        }
      }
      TuitionApplication: {
        payload: Prisma.$TuitionApplicationPayload<ExtArgs>
        fields: Prisma.TuitionApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TuitionApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TuitionApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload>
          }
          findFirst: {
            args: Prisma.TuitionApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TuitionApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload>
          }
          findMany: {
            args: Prisma.TuitionApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload>[]
          }
          create: {
            args: Prisma.TuitionApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload>
          }
          createMany: {
            args: Prisma.TuitionApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TuitionApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload>[]
          }
          delete: {
            args: Prisma.TuitionApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload>
          }
          update: {
            args: Prisma.TuitionApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload>
          }
          deleteMany: {
            args: Prisma.TuitionApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TuitionApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TuitionApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload>[]
          }
          upsert: {
            args: Prisma.TuitionApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionApplicationPayload>
          }
          aggregate: {
            args: Prisma.TuitionApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTuitionApplication>
          }
          groupBy: {
            args: Prisma.TuitionApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TuitionApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TuitionApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<TuitionApplicationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tutor?: TutorOmit
    tuition?: TuitionOmit
    tuitionApplication?: TuitionApplicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TutorCountOutputType
   */

  export type TutorCountOutputType = {
    applications: number
  }

  export type TutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | TutorCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCountOutputType
     */
    select?: TutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TuitionApplicationWhereInput
  }


  /**
   * Count Type TuitionCountOutputType
   */

  export type TuitionCountOutputType = {
    applications: number
  }

  export type TuitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | TuitionCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * TuitionCountOutputType without action
   */
  export type TuitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionCountOutputType
     */
    select?: TuitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TuitionCountOutputType without action
   */
  export type TuitionCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TuitionApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tutor
   */

  export type AggregateTutor = {
    _count: TutorCountAggregateOutputType | null
    _avg: TutorAvgAggregateOutputType | null
    _sum: TutorSumAggregateOutputType | null
    _min: TutorMinAggregateOutputType | null
    _max: TutorMaxAggregateOutputType | null
  }

  export type TutorAvgAggregateOutputType = {
    id: number | null
  }

  export type TutorSumAggregateOutputType = {
    id: number | null
  }

  export type TutorMinAggregateOutputType = {
    id: number | null
    institution: string | null
    subjects: string | null
    year: string | null
    name: string | null
    email: string | null
    location: string | null
    sampleTeachingVideo: string | null
    subjectToTeach: string | null
    userId: string | null
  }

  export type TutorMaxAggregateOutputType = {
    id: number | null
    institution: string | null
    subjects: string | null
    year: string | null
    name: string | null
    email: string | null
    location: string | null
    sampleTeachingVideo: string | null
    subjectToTeach: string | null
    userId: string | null
  }

  export type TutorCountAggregateOutputType = {
    id: number
    institution: number
    subjects: number
    year: number
    name: number
    email: number
    location: number
    sampleTeachingVideo: number
    subjectToTeach: number
    userId: number
    _all: number
  }


  export type TutorAvgAggregateInputType = {
    id?: true
  }

  export type TutorSumAggregateInputType = {
    id?: true
  }

  export type TutorMinAggregateInputType = {
    id?: true
    institution?: true
    subjects?: true
    year?: true
    name?: true
    email?: true
    location?: true
    sampleTeachingVideo?: true
    subjectToTeach?: true
    userId?: true
  }

  export type TutorMaxAggregateInputType = {
    id?: true
    institution?: true
    subjects?: true
    year?: true
    name?: true
    email?: true
    location?: true
    sampleTeachingVideo?: true
    subjectToTeach?: true
    userId?: true
  }

  export type TutorCountAggregateInputType = {
    id?: true
    institution?: true
    subjects?: true
    year?: true
    name?: true
    email?: true
    location?: true
    sampleTeachingVideo?: true
    subjectToTeach?: true
    userId?: true
    _all?: true
  }

  export type TutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutor to aggregate.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tutors
    **/
    _count?: true | TutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorMaxAggregateInputType
  }

  export type GetTutorAggregateType<T extends TutorAggregateArgs> = {
        [P in keyof T & keyof AggregateTutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutor[P]>
      : GetScalarType<T[P], AggregateTutor[P]>
  }




  export type TutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorWhereInput
    orderBy?: TutorOrderByWithAggregationInput | TutorOrderByWithAggregationInput[]
    by: TutorScalarFieldEnum[] | TutorScalarFieldEnum
    having?: TutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorCountAggregateInputType | true
    _avg?: TutorAvgAggregateInputType
    _sum?: TutorSumAggregateInputType
    _min?: TutorMinAggregateInputType
    _max?: TutorMaxAggregateInputType
  }

  export type TutorGroupByOutputType = {
    id: number
    institution: string
    subjects: string
    year: string
    name: string
    email: string
    location: string
    sampleTeachingVideo: string
    subjectToTeach: string
    userId: string
    _count: TutorCountAggregateOutputType | null
    _avg: TutorAvgAggregateOutputType | null
    _sum: TutorSumAggregateOutputType | null
    _min: TutorMinAggregateOutputType | null
    _max: TutorMaxAggregateOutputType | null
  }

  type GetTutorGroupByPayload<T extends TutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorGroupByOutputType[P]>
            : GetScalarType<T[P], TutorGroupByOutputType[P]>
        }
      >
    >


  export type TutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    subjects?: boolean
    year?: boolean
    name?: boolean
    email?: boolean
    location?: boolean
    sampleTeachingVideo?: boolean
    subjectToTeach?: boolean
    userId?: boolean
    applications?: boolean | Tutor$applicationsArgs<ExtArgs>
    _count?: boolean | TutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor"]>

  export type TutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    subjects?: boolean
    year?: boolean
    name?: boolean
    email?: boolean
    location?: boolean
    sampleTeachingVideo?: boolean
    subjectToTeach?: boolean
    userId?: boolean
  }, ExtArgs["result"]["tutor"]>

  export type TutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    subjects?: boolean
    year?: boolean
    name?: boolean
    email?: boolean
    location?: boolean
    sampleTeachingVideo?: boolean
    subjectToTeach?: boolean
    userId?: boolean
  }, ExtArgs["result"]["tutor"]>

  export type TutorSelectScalar = {
    id?: boolean
    institution?: boolean
    subjects?: boolean
    year?: boolean
    name?: boolean
    email?: boolean
    location?: boolean
    sampleTeachingVideo?: boolean
    subjectToTeach?: boolean
    userId?: boolean
  }

  export type TutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institution" | "subjects" | "year" | "name" | "email" | "location" | "sampleTeachingVideo" | "subjectToTeach" | "userId", ExtArgs["result"]["tutor"]>
  export type TutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Tutor$applicationsArgs<ExtArgs>
    _count?: boolean | TutorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tutor"
    objects: {
      applications: Prisma.$TuitionApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      institution: string
      subjects: string
      year: string
      name: string
      email: string
      location: string
      sampleTeachingVideo: string
      subjectToTeach: string
      userId: string
    }, ExtArgs["result"]["tutor"]>
    composites: {}
  }

  type TutorGetPayload<S extends boolean | null | undefined | TutorDefaultArgs> = $Result.GetResult<Prisma.$TutorPayload, S>

  type TutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorCountAggregateInputType | true
    }

  export interface TutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tutor'], meta: { name: 'Tutor' } }
    /**
     * Find zero or one Tutor that matches the filter.
     * @param {TutorFindUniqueArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorFindUniqueArgs>(args: SelectSubset<T, TutorFindUniqueArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorFindUniqueOrThrowArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindFirstArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorFindFirstArgs>(args?: SelectSubset<T, TutorFindFirstArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindFirstOrThrowArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutors
     * const tutors = await prisma.tutor.findMany()
     * 
     * // Get first 10 Tutors
     * const tutors = await prisma.tutor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorWithIdOnly = await prisma.tutor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorFindManyArgs>(args?: SelectSubset<T, TutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutor.
     * @param {TutorCreateArgs} args - Arguments to create a Tutor.
     * @example
     * // Create one Tutor
     * const Tutor = await prisma.tutor.create({
     *   data: {
     *     // ... data to create a Tutor
     *   }
     * })
     * 
     */
    create<T extends TutorCreateArgs>(args: SelectSubset<T, TutorCreateArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutors.
     * @param {TutorCreateManyArgs} args - Arguments to create many Tutors.
     * @example
     * // Create many Tutors
     * const tutor = await prisma.tutor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorCreateManyArgs>(args?: SelectSubset<T, TutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tutors and returns the data saved in the database.
     * @param {TutorCreateManyAndReturnArgs} args - Arguments to create many Tutors.
     * @example
     * // Create many Tutors
     * const tutor = await prisma.tutor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tutors and only return the `id`
     * const tutorWithIdOnly = await prisma.tutor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tutor.
     * @param {TutorDeleteArgs} args - Arguments to delete one Tutor.
     * @example
     * // Delete one Tutor
     * const Tutor = await prisma.tutor.delete({
     *   where: {
     *     // ... filter to delete one Tutor
     *   }
     * })
     * 
     */
    delete<T extends TutorDeleteArgs>(args: SelectSubset<T, TutorDeleteArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutor.
     * @param {TutorUpdateArgs} args - Arguments to update one Tutor.
     * @example
     * // Update one Tutor
     * const tutor = await prisma.tutor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorUpdateArgs>(args: SelectSubset<T, TutorUpdateArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutors.
     * @param {TutorDeleteManyArgs} args - Arguments to filter Tutors to delete.
     * @example
     * // Delete a few Tutors
     * const { count } = await prisma.tutor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorDeleteManyArgs>(args?: SelectSubset<T, TutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutors
     * const tutor = await prisma.tutor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorUpdateManyArgs>(args: SelectSubset<T, TutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutors and returns the data updated in the database.
     * @param {TutorUpdateManyAndReturnArgs} args - Arguments to update many Tutors.
     * @example
     * // Update many Tutors
     * const tutor = await prisma.tutor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tutors and only return the `id`
     * const tutorWithIdOnly = await prisma.tutor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TutorUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tutor.
     * @param {TutorUpsertArgs} args - Arguments to update or create a Tutor.
     * @example
     * // Update or create a Tutor
     * const tutor = await prisma.tutor.upsert({
     *   create: {
     *     // ... data to create a Tutor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutor we want to update
     *   }
     * })
     */
    upsert<T extends TutorUpsertArgs>(args: SelectSubset<T, TutorUpsertArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCountArgs} args - Arguments to filter Tutors to count.
     * @example
     * // Count the number of Tutors
     * const count = await prisma.tutor.count({
     *   where: {
     *     // ... the filter for the Tutors we want to count
     *   }
     * })
    **/
    count<T extends TutorCountArgs>(
      args?: Subset<T, TutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TutorAggregateArgs>(args: Subset<T, TutorAggregateArgs>): Prisma.PrismaPromise<GetTutorAggregateType<T>>

    /**
     * Group by Tutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorGroupByArgs['orderBy'] }
        : { orderBy?: TutorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tutor model
   */
  readonly fields: TutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tutor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Tutor$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tutor model
   */
  interface TutorFieldRefs {
    readonly id: FieldRef<"Tutor", 'Int'>
    readonly institution: FieldRef<"Tutor", 'String'>
    readonly subjects: FieldRef<"Tutor", 'String'>
    readonly year: FieldRef<"Tutor", 'String'>
    readonly name: FieldRef<"Tutor", 'String'>
    readonly email: FieldRef<"Tutor", 'String'>
    readonly location: FieldRef<"Tutor", 'String'>
    readonly sampleTeachingVideo: FieldRef<"Tutor", 'String'>
    readonly subjectToTeach: FieldRef<"Tutor", 'String'>
    readonly userId: FieldRef<"Tutor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tutor findUnique
   */
  export type TutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor findUniqueOrThrow
   */
  export type TutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor findFirst
   */
  export type TutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutors.
     */
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor findFirstOrThrow
   */
  export type TutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutors.
     */
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor findMany
   */
  export type TutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutors to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor create
   */
  export type TutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Tutor.
     */
    data: XOR<TutorCreateInput, TutorUncheckedCreateInput>
  }

  /**
   * Tutor createMany
   */
  export type TutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tutors.
     */
    data: TutorCreateManyInput | TutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tutor createManyAndReturn
   */
  export type TutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * The data used to create many Tutors.
     */
    data: TutorCreateManyInput | TutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tutor update
   */
  export type TutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Tutor.
     */
    data: XOR<TutorUpdateInput, TutorUncheckedUpdateInput>
    /**
     * Choose, which Tutor to update.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor updateMany
   */
  export type TutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tutors.
     */
    data: XOR<TutorUpdateManyMutationInput, TutorUncheckedUpdateManyInput>
    /**
     * Filter which Tutors to update
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to update.
     */
    limit?: number
  }

  /**
   * Tutor updateManyAndReturn
   */
  export type TutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * The data used to update Tutors.
     */
    data: XOR<TutorUpdateManyMutationInput, TutorUncheckedUpdateManyInput>
    /**
     * Filter which Tutors to update
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to update.
     */
    limit?: number
  }

  /**
   * Tutor upsert
   */
  export type TutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Tutor to update in case it exists.
     */
    where: TutorWhereUniqueInput
    /**
     * In case the Tutor found by the `where` argument doesn't exist, create a new Tutor with this data.
     */
    create: XOR<TutorCreateInput, TutorUncheckedCreateInput>
    /**
     * In case the Tutor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorUpdateInput, TutorUncheckedUpdateInput>
  }

  /**
   * Tutor delete
   */
  export type TutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter which Tutor to delete.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor deleteMany
   */
  export type TutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutors to delete
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to delete.
     */
    limit?: number
  }

  /**
   * Tutor.applications
   */
  export type Tutor$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    where?: TuitionApplicationWhereInput
    orderBy?: TuitionApplicationOrderByWithRelationInput | TuitionApplicationOrderByWithRelationInput[]
    cursor?: TuitionApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TuitionApplicationScalarFieldEnum | TuitionApplicationScalarFieldEnum[]
  }

  /**
   * Tutor without action
   */
  export type TutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
  }


  /**
   * Model Tuition
   */

  export type AggregateTuition = {
    _count: TuitionCountAggregateOutputType | null
    _avg: TuitionAvgAggregateOutputType | null
    _sum: TuitionSumAggregateOutputType | null
    _min: TuitionMinAggregateOutputType | null
    _max: TuitionMaxAggregateOutputType | null
  }

  export type TuitionAvgAggregateOutputType = {
    id: number | null
  }

  export type TuitionSumAggregateOutputType = {
    id: number | null
  }

  export type TuitionMinAggregateOutputType = {
    id: number | null
    description: string | null
    district: string | null
    location: string | null
    year: string | null
    subjects: string | null
    salary: string | null
    mode: string | null
    postedById: string | null
  }

  export type TuitionMaxAggregateOutputType = {
    id: number | null
    description: string | null
    district: string | null
    location: string | null
    year: string | null
    subjects: string | null
    salary: string | null
    mode: string | null
    postedById: string | null
  }

  export type TuitionCountAggregateOutputType = {
    id: number
    description: number
    district: number
    location: number
    year: number
    subjects: number
    salary: number
    mode: number
    postedById: number
    _all: number
  }


  export type TuitionAvgAggregateInputType = {
    id?: true
  }

  export type TuitionSumAggregateInputType = {
    id?: true
  }

  export type TuitionMinAggregateInputType = {
    id?: true
    description?: true
    district?: true
    location?: true
    year?: true
    subjects?: true
    salary?: true
    mode?: true
    postedById?: true
  }

  export type TuitionMaxAggregateInputType = {
    id?: true
    description?: true
    district?: true
    location?: true
    year?: true
    subjects?: true
    salary?: true
    mode?: true
    postedById?: true
  }

  export type TuitionCountAggregateInputType = {
    id?: true
    description?: true
    district?: true
    location?: true
    year?: true
    subjects?: true
    salary?: true
    mode?: true
    postedById?: true
    _all?: true
  }

  export type TuitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tuition to aggregate.
     */
    where?: TuitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tuitions to fetch.
     */
    orderBy?: TuitionOrderByWithRelationInput | TuitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TuitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tuitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tuitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tuitions
    **/
    _count?: true | TuitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TuitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TuitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TuitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TuitionMaxAggregateInputType
  }

  export type GetTuitionAggregateType<T extends TuitionAggregateArgs> = {
        [P in keyof T & keyof AggregateTuition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTuition[P]>
      : GetScalarType<T[P], AggregateTuition[P]>
  }




  export type TuitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TuitionWhereInput
    orderBy?: TuitionOrderByWithAggregationInput | TuitionOrderByWithAggregationInput[]
    by: TuitionScalarFieldEnum[] | TuitionScalarFieldEnum
    having?: TuitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TuitionCountAggregateInputType | true
    _avg?: TuitionAvgAggregateInputType
    _sum?: TuitionSumAggregateInputType
    _min?: TuitionMinAggregateInputType
    _max?: TuitionMaxAggregateInputType
  }

  export type TuitionGroupByOutputType = {
    id: number
    description: string
    district: string
    location: string
    year: string
    subjects: string
    salary: string
    mode: string
    postedById: string
    _count: TuitionCountAggregateOutputType | null
    _avg: TuitionAvgAggregateOutputType | null
    _sum: TuitionSumAggregateOutputType | null
    _min: TuitionMinAggregateOutputType | null
    _max: TuitionMaxAggregateOutputType | null
  }

  type GetTuitionGroupByPayload<T extends TuitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TuitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TuitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TuitionGroupByOutputType[P]>
            : GetScalarType<T[P], TuitionGroupByOutputType[P]>
        }
      >
    >


  export type TuitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    district?: boolean
    location?: boolean
    year?: boolean
    subjects?: boolean
    salary?: boolean
    mode?: boolean
    postedById?: boolean
    applications?: boolean | Tuition$applicationsArgs<ExtArgs>
    _count?: boolean | TuitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tuition"]>

  export type TuitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    district?: boolean
    location?: boolean
    year?: boolean
    subjects?: boolean
    salary?: boolean
    mode?: boolean
    postedById?: boolean
  }, ExtArgs["result"]["tuition"]>

  export type TuitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    district?: boolean
    location?: boolean
    year?: boolean
    subjects?: boolean
    salary?: boolean
    mode?: boolean
    postedById?: boolean
  }, ExtArgs["result"]["tuition"]>

  export type TuitionSelectScalar = {
    id?: boolean
    description?: boolean
    district?: boolean
    location?: boolean
    year?: boolean
    subjects?: boolean
    salary?: boolean
    mode?: boolean
    postedById?: boolean
  }

  export type TuitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "district" | "location" | "year" | "subjects" | "salary" | "mode" | "postedById", ExtArgs["result"]["tuition"]>
  export type TuitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Tuition$applicationsArgs<ExtArgs>
    _count?: boolean | TuitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TuitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TuitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TuitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tuition"
    objects: {
      applications: Prisma.$TuitionApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      district: string
      location: string
      year: string
      subjects: string
      salary: string
      mode: string
      postedById: string
    }, ExtArgs["result"]["tuition"]>
    composites: {}
  }

  type TuitionGetPayload<S extends boolean | null | undefined | TuitionDefaultArgs> = $Result.GetResult<Prisma.$TuitionPayload, S>

  type TuitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TuitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TuitionCountAggregateInputType | true
    }

  export interface TuitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tuition'], meta: { name: 'Tuition' } }
    /**
     * Find zero or one Tuition that matches the filter.
     * @param {TuitionFindUniqueArgs} args - Arguments to find a Tuition
     * @example
     * // Get one Tuition
     * const tuition = await prisma.tuition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TuitionFindUniqueArgs>(args: SelectSubset<T, TuitionFindUniqueArgs<ExtArgs>>): Prisma__TuitionClient<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tuition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TuitionFindUniqueOrThrowArgs} args - Arguments to find a Tuition
     * @example
     * // Get one Tuition
     * const tuition = await prisma.tuition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TuitionFindUniqueOrThrowArgs>(args: SelectSubset<T, TuitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TuitionClient<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tuition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionFindFirstArgs} args - Arguments to find a Tuition
     * @example
     * // Get one Tuition
     * const tuition = await prisma.tuition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TuitionFindFirstArgs>(args?: SelectSubset<T, TuitionFindFirstArgs<ExtArgs>>): Prisma__TuitionClient<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tuition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionFindFirstOrThrowArgs} args - Arguments to find a Tuition
     * @example
     * // Get one Tuition
     * const tuition = await prisma.tuition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TuitionFindFirstOrThrowArgs>(args?: SelectSubset<T, TuitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TuitionClient<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tuitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tuitions
     * const tuitions = await prisma.tuition.findMany()
     * 
     * // Get first 10 Tuitions
     * const tuitions = await prisma.tuition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tuitionWithIdOnly = await prisma.tuition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TuitionFindManyArgs>(args?: SelectSubset<T, TuitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tuition.
     * @param {TuitionCreateArgs} args - Arguments to create a Tuition.
     * @example
     * // Create one Tuition
     * const Tuition = await prisma.tuition.create({
     *   data: {
     *     // ... data to create a Tuition
     *   }
     * })
     * 
     */
    create<T extends TuitionCreateArgs>(args: SelectSubset<T, TuitionCreateArgs<ExtArgs>>): Prisma__TuitionClient<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tuitions.
     * @param {TuitionCreateManyArgs} args - Arguments to create many Tuitions.
     * @example
     * // Create many Tuitions
     * const tuition = await prisma.tuition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TuitionCreateManyArgs>(args?: SelectSubset<T, TuitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tuitions and returns the data saved in the database.
     * @param {TuitionCreateManyAndReturnArgs} args - Arguments to create many Tuitions.
     * @example
     * // Create many Tuitions
     * const tuition = await prisma.tuition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tuitions and only return the `id`
     * const tuitionWithIdOnly = await prisma.tuition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TuitionCreateManyAndReturnArgs>(args?: SelectSubset<T, TuitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tuition.
     * @param {TuitionDeleteArgs} args - Arguments to delete one Tuition.
     * @example
     * // Delete one Tuition
     * const Tuition = await prisma.tuition.delete({
     *   where: {
     *     // ... filter to delete one Tuition
     *   }
     * })
     * 
     */
    delete<T extends TuitionDeleteArgs>(args: SelectSubset<T, TuitionDeleteArgs<ExtArgs>>): Prisma__TuitionClient<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tuition.
     * @param {TuitionUpdateArgs} args - Arguments to update one Tuition.
     * @example
     * // Update one Tuition
     * const tuition = await prisma.tuition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TuitionUpdateArgs>(args: SelectSubset<T, TuitionUpdateArgs<ExtArgs>>): Prisma__TuitionClient<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tuitions.
     * @param {TuitionDeleteManyArgs} args - Arguments to filter Tuitions to delete.
     * @example
     * // Delete a few Tuitions
     * const { count } = await prisma.tuition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TuitionDeleteManyArgs>(args?: SelectSubset<T, TuitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tuitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tuitions
     * const tuition = await prisma.tuition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TuitionUpdateManyArgs>(args: SelectSubset<T, TuitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tuitions and returns the data updated in the database.
     * @param {TuitionUpdateManyAndReturnArgs} args - Arguments to update many Tuitions.
     * @example
     * // Update many Tuitions
     * const tuition = await prisma.tuition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tuitions and only return the `id`
     * const tuitionWithIdOnly = await prisma.tuition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TuitionUpdateManyAndReturnArgs>(args: SelectSubset<T, TuitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tuition.
     * @param {TuitionUpsertArgs} args - Arguments to update or create a Tuition.
     * @example
     * // Update or create a Tuition
     * const tuition = await prisma.tuition.upsert({
     *   create: {
     *     // ... data to create a Tuition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tuition we want to update
     *   }
     * })
     */
    upsert<T extends TuitionUpsertArgs>(args: SelectSubset<T, TuitionUpsertArgs<ExtArgs>>): Prisma__TuitionClient<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tuitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionCountArgs} args - Arguments to filter Tuitions to count.
     * @example
     * // Count the number of Tuitions
     * const count = await prisma.tuition.count({
     *   where: {
     *     // ... the filter for the Tuitions we want to count
     *   }
     * })
    **/
    count<T extends TuitionCountArgs>(
      args?: Subset<T, TuitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TuitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tuition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TuitionAggregateArgs>(args: Subset<T, TuitionAggregateArgs>): Prisma.PrismaPromise<GetTuitionAggregateType<T>>

    /**
     * Group by Tuition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TuitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TuitionGroupByArgs['orderBy'] }
        : { orderBy?: TuitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TuitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTuitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tuition model
   */
  readonly fields: TuitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tuition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TuitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Tuition$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Tuition$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tuition model
   */
  interface TuitionFieldRefs {
    readonly id: FieldRef<"Tuition", 'Int'>
    readonly description: FieldRef<"Tuition", 'String'>
    readonly district: FieldRef<"Tuition", 'String'>
    readonly location: FieldRef<"Tuition", 'String'>
    readonly year: FieldRef<"Tuition", 'String'>
    readonly subjects: FieldRef<"Tuition", 'String'>
    readonly salary: FieldRef<"Tuition", 'String'>
    readonly mode: FieldRef<"Tuition", 'String'>
    readonly postedById: FieldRef<"Tuition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tuition findUnique
   */
  export type TuitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionInclude<ExtArgs> | null
    /**
     * Filter, which Tuition to fetch.
     */
    where: TuitionWhereUniqueInput
  }

  /**
   * Tuition findUniqueOrThrow
   */
  export type TuitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionInclude<ExtArgs> | null
    /**
     * Filter, which Tuition to fetch.
     */
    where: TuitionWhereUniqueInput
  }

  /**
   * Tuition findFirst
   */
  export type TuitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionInclude<ExtArgs> | null
    /**
     * Filter, which Tuition to fetch.
     */
    where?: TuitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tuitions to fetch.
     */
    orderBy?: TuitionOrderByWithRelationInput | TuitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tuitions.
     */
    cursor?: TuitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tuitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tuitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tuitions.
     */
    distinct?: TuitionScalarFieldEnum | TuitionScalarFieldEnum[]
  }

  /**
   * Tuition findFirstOrThrow
   */
  export type TuitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionInclude<ExtArgs> | null
    /**
     * Filter, which Tuition to fetch.
     */
    where?: TuitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tuitions to fetch.
     */
    orderBy?: TuitionOrderByWithRelationInput | TuitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tuitions.
     */
    cursor?: TuitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tuitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tuitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tuitions.
     */
    distinct?: TuitionScalarFieldEnum | TuitionScalarFieldEnum[]
  }

  /**
   * Tuition findMany
   */
  export type TuitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionInclude<ExtArgs> | null
    /**
     * Filter, which Tuitions to fetch.
     */
    where?: TuitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tuitions to fetch.
     */
    orderBy?: TuitionOrderByWithRelationInput | TuitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tuitions.
     */
    cursor?: TuitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tuitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tuitions.
     */
    skip?: number
    distinct?: TuitionScalarFieldEnum | TuitionScalarFieldEnum[]
  }

  /**
   * Tuition create
   */
  export type TuitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Tuition.
     */
    data: XOR<TuitionCreateInput, TuitionUncheckedCreateInput>
  }

  /**
   * Tuition createMany
   */
  export type TuitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tuitions.
     */
    data: TuitionCreateManyInput | TuitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tuition createManyAndReturn
   */
  export type TuitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * The data used to create many Tuitions.
     */
    data: TuitionCreateManyInput | TuitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tuition update
   */
  export type TuitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Tuition.
     */
    data: XOR<TuitionUpdateInput, TuitionUncheckedUpdateInput>
    /**
     * Choose, which Tuition to update.
     */
    where: TuitionWhereUniqueInput
  }

  /**
   * Tuition updateMany
   */
  export type TuitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tuitions.
     */
    data: XOR<TuitionUpdateManyMutationInput, TuitionUncheckedUpdateManyInput>
    /**
     * Filter which Tuitions to update
     */
    where?: TuitionWhereInput
    /**
     * Limit how many Tuitions to update.
     */
    limit?: number
  }

  /**
   * Tuition updateManyAndReturn
   */
  export type TuitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * The data used to update Tuitions.
     */
    data: XOR<TuitionUpdateManyMutationInput, TuitionUncheckedUpdateManyInput>
    /**
     * Filter which Tuitions to update
     */
    where?: TuitionWhereInput
    /**
     * Limit how many Tuitions to update.
     */
    limit?: number
  }

  /**
   * Tuition upsert
   */
  export type TuitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Tuition to update in case it exists.
     */
    where: TuitionWhereUniqueInput
    /**
     * In case the Tuition found by the `where` argument doesn't exist, create a new Tuition with this data.
     */
    create: XOR<TuitionCreateInput, TuitionUncheckedCreateInput>
    /**
     * In case the Tuition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TuitionUpdateInput, TuitionUncheckedUpdateInput>
  }

  /**
   * Tuition delete
   */
  export type TuitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionInclude<ExtArgs> | null
    /**
     * Filter which Tuition to delete.
     */
    where: TuitionWhereUniqueInput
  }

  /**
   * Tuition deleteMany
   */
  export type TuitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tuitions to delete
     */
    where?: TuitionWhereInput
    /**
     * Limit how many Tuitions to delete.
     */
    limit?: number
  }

  /**
   * Tuition.applications
   */
  export type Tuition$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    where?: TuitionApplicationWhereInput
    orderBy?: TuitionApplicationOrderByWithRelationInput | TuitionApplicationOrderByWithRelationInput[]
    cursor?: TuitionApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TuitionApplicationScalarFieldEnum | TuitionApplicationScalarFieldEnum[]
  }

  /**
   * Tuition without action
   */
  export type TuitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tuition
     */
    select?: TuitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tuition
     */
    omit?: TuitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionInclude<ExtArgs> | null
  }


  /**
   * Model TuitionApplication
   */

  export type AggregateTuitionApplication = {
    _count: TuitionApplicationCountAggregateOutputType | null
    _avg: TuitionApplicationAvgAggregateOutputType | null
    _sum: TuitionApplicationSumAggregateOutputType | null
    _min: TuitionApplicationMinAggregateOutputType | null
    _max: TuitionApplicationMaxAggregateOutputType | null
  }

  export type TuitionApplicationAvgAggregateOutputType = {
    id: number | null
    tuitionId: number | null
    tutorId: number | null
  }

  export type TuitionApplicationSumAggregateOutputType = {
    id: number | null
    tuitionId: number | null
    tutorId: number | null
  }

  export type TuitionApplicationMinAggregateOutputType = {
    id: number | null
    tuitionId: number | null
    tutorId: number | null
    message: string | null
    status: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TuitionApplicationMaxAggregateOutputType = {
    id: number | null
    tuitionId: number | null
    tutorId: number | null
    message: string | null
    status: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TuitionApplicationCountAggregateOutputType = {
    id: number
    tuitionId: number
    tutorId: number
    message: number
    status: number
    isRead: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TuitionApplicationAvgAggregateInputType = {
    id?: true
    tuitionId?: true
    tutorId?: true
  }

  export type TuitionApplicationSumAggregateInputType = {
    id?: true
    tuitionId?: true
    tutorId?: true
  }

  export type TuitionApplicationMinAggregateInputType = {
    id?: true
    tuitionId?: true
    tutorId?: true
    message?: true
    status?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TuitionApplicationMaxAggregateInputType = {
    id?: true
    tuitionId?: true
    tutorId?: true
    message?: true
    status?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TuitionApplicationCountAggregateInputType = {
    id?: true
    tuitionId?: true
    tutorId?: true
    message?: true
    status?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TuitionApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TuitionApplication to aggregate.
     */
    where?: TuitionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TuitionApplications to fetch.
     */
    orderBy?: TuitionApplicationOrderByWithRelationInput | TuitionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TuitionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TuitionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TuitionApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TuitionApplications
    **/
    _count?: true | TuitionApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TuitionApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TuitionApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TuitionApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TuitionApplicationMaxAggregateInputType
  }

  export type GetTuitionApplicationAggregateType<T extends TuitionApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateTuitionApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTuitionApplication[P]>
      : GetScalarType<T[P], AggregateTuitionApplication[P]>
  }




  export type TuitionApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TuitionApplicationWhereInput
    orderBy?: TuitionApplicationOrderByWithAggregationInput | TuitionApplicationOrderByWithAggregationInput[]
    by: TuitionApplicationScalarFieldEnum[] | TuitionApplicationScalarFieldEnum
    having?: TuitionApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TuitionApplicationCountAggregateInputType | true
    _avg?: TuitionApplicationAvgAggregateInputType
    _sum?: TuitionApplicationSumAggregateInputType
    _min?: TuitionApplicationMinAggregateInputType
    _max?: TuitionApplicationMaxAggregateInputType
  }

  export type TuitionApplicationGroupByOutputType = {
    id: number
    tuitionId: number
    tutorId: number
    message: string | null
    status: string
    isRead: boolean
    createdAt: Date
    updatedAt: Date
    _count: TuitionApplicationCountAggregateOutputType | null
    _avg: TuitionApplicationAvgAggregateOutputType | null
    _sum: TuitionApplicationSumAggregateOutputType | null
    _min: TuitionApplicationMinAggregateOutputType | null
    _max: TuitionApplicationMaxAggregateOutputType | null
  }

  type GetTuitionApplicationGroupByPayload<T extends TuitionApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TuitionApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TuitionApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TuitionApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], TuitionApplicationGroupByOutputType[P]>
        }
      >
    >


  export type TuitionApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tuitionId?: boolean
    tutorId?: boolean
    message?: boolean
    status?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tuition?: boolean | TuitionDefaultArgs<ExtArgs>
    tutor?: boolean | TutorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tuitionApplication"]>

  export type TuitionApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tuitionId?: boolean
    tutorId?: boolean
    message?: boolean
    status?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tuition?: boolean | TuitionDefaultArgs<ExtArgs>
    tutor?: boolean | TutorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tuitionApplication"]>

  export type TuitionApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tuitionId?: boolean
    tutorId?: boolean
    message?: boolean
    status?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tuition?: boolean | TuitionDefaultArgs<ExtArgs>
    tutor?: boolean | TutorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tuitionApplication"]>

  export type TuitionApplicationSelectScalar = {
    id?: boolean
    tuitionId?: boolean
    tutorId?: boolean
    message?: boolean
    status?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TuitionApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tuitionId" | "tutorId" | "message" | "status" | "isRead" | "createdAt" | "updatedAt", ExtArgs["result"]["tuitionApplication"]>
  export type TuitionApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tuition?: boolean | TuitionDefaultArgs<ExtArgs>
    tutor?: boolean | TutorDefaultArgs<ExtArgs>
  }
  export type TuitionApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tuition?: boolean | TuitionDefaultArgs<ExtArgs>
    tutor?: boolean | TutorDefaultArgs<ExtArgs>
  }
  export type TuitionApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tuition?: boolean | TuitionDefaultArgs<ExtArgs>
    tutor?: boolean | TutorDefaultArgs<ExtArgs>
  }

  export type $TuitionApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TuitionApplication"
    objects: {
      tuition: Prisma.$TuitionPayload<ExtArgs>
      tutor: Prisma.$TutorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tuitionId: number
      tutorId: number
      message: string | null
      status: string
      isRead: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tuitionApplication"]>
    composites: {}
  }

  type TuitionApplicationGetPayload<S extends boolean | null | undefined | TuitionApplicationDefaultArgs> = $Result.GetResult<Prisma.$TuitionApplicationPayload, S>

  type TuitionApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TuitionApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TuitionApplicationCountAggregateInputType | true
    }

  export interface TuitionApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TuitionApplication'], meta: { name: 'TuitionApplication' } }
    /**
     * Find zero or one TuitionApplication that matches the filter.
     * @param {TuitionApplicationFindUniqueArgs} args - Arguments to find a TuitionApplication
     * @example
     * // Get one TuitionApplication
     * const tuitionApplication = await prisma.tuitionApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TuitionApplicationFindUniqueArgs>(args: SelectSubset<T, TuitionApplicationFindUniqueArgs<ExtArgs>>): Prisma__TuitionApplicationClient<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TuitionApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TuitionApplicationFindUniqueOrThrowArgs} args - Arguments to find a TuitionApplication
     * @example
     * // Get one TuitionApplication
     * const tuitionApplication = await prisma.tuitionApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TuitionApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, TuitionApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TuitionApplicationClient<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TuitionApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionApplicationFindFirstArgs} args - Arguments to find a TuitionApplication
     * @example
     * // Get one TuitionApplication
     * const tuitionApplication = await prisma.tuitionApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TuitionApplicationFindFirstArgs>(args?: SelectSubset<T, TuitionApplicationFindFirstArgs<ExtArgs>>): Prisma__TuitionApplicationClient<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TuitionApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionApplicationFindFirstOrThrowArgs} args - Arguments to find a TuitionApplication
     * @example
     * // Get one TuitionApplication
     * const tuitionApplication = await prisma.tuitionApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TuitionApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, TuitionApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TuitionApplicationClient<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TuitionApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TuitionApplications
     * const tuitionApplications = await prisma.tuitionApplication.findMany()
     * 
     * // Get first 10 TuitionApplications
     * const tuitionApplications = await prisma.tuitionApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tuitionApplicationWithIdOnly = await prisma.tuitionApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TuitionApplicationFindManyArgs>(args?: SelectSubset<T, TuitionApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TuitionApplication.
     * @param {TuitionApplicationCreateArgs} args - Arguments to create a TuitionApplication.
     * @example
     * // Create one TuitionApplication
     * const TuitionApplication = await prisma.tuitionApplication.create({
     *   data: {
     *     // ... data to create a TuitionApplication
     *   }
     * })
     * 
     */
    create<T extends TuitionApplicationCreateArgs>(args: SelectSubset<T, TuitionApplicationCreateArgs<ExtArgs>>): Prisma__TuitionApplicationClient<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TuitionApplications.
     * @param {TuitionApplicationCreateManyArgs} args - Arguments to create many TuitionApplications.
     * @example
     * // Create many TuitionApplications
     * const tuitionApplication = await prisma.tuitionApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TuitionApplicationCreateManyArgs>(args?: SelectSubset<T, TuitionApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TuitionApplications and returns the data saved in the database.
     * @param {TuitionApplicationCreateManyAndReturnArgs} args - Arguments to create many TuitionApplications.
     * @example
     * // Create many TuitionApplications
     * const tuitionApplication = await prisma.tuitionApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TuitionApplications and only return the `id`
     * const tuitionApplicationWithIdOnly = await prisma.tuitionApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TuitionApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, TuitionApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TuitionApplication.
     * @param {TuitionApplicationDeleteArgs} args - Arguments to delete one TuitionApplication.
     * @example
     * // Delete one TuitionApplication
     * const TuitionApplication = await prisma.tuitionApplication.delete({
     *   where: {
     *     // ... filter to delete one TuitionApplication
     *   }
     * })
     * 
     */
    delete<T extends TuitionApplicationDeleteArgs>(args: SelectSubset<T, TuitionApplicationDeleteArgs<ExtArgs>>): Prisma__TuitionApplicationClient<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TuitionApplication.
     * @param {TuitionApplicationUpdateArgs} args - Arguments to update one TuitionApplication.
     * @example
     * // Update one TuitionApplication
     * const tuitionApplication = await prisma.tuitionApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TuitionApplicationUpdateArgs>(args: SelectSubset<T, TuitionApplicationUpdateArgs<ExtArgs>>): Prisma__TuitionApplicationClient<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TuitionApplications.
     * @param {TuitionApplicationDeleteManyArgs} args - Arguments to filter TuitionApplications to delete.
     * @example
     * // Delete a few TuitionApplications
     * const { count } = await prisma.tuitionApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TuitionApplicationDeleteManyArgs>(args?: SelectSubset<T, TuitionApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TuitionApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TuitionApplications
     * const tuitionApplication = await prisma.tuitionApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TuitionApplicationUpdateManyArgs>(args: SelectSubset<T, TuitionApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TuitionApplications and returns the data updated in the database.
     * @param {TuitionApplicationUpdateManyAndReturnArgs} args - Arguments to update many TuitionApplications.
     * @example
     * // Update many TuitionApplications
     * const tuitionApplication = await prisma.tuitionApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TuitionApplications and only return the `id`
     * const tuitionApplicationWithIdOnly = await prisma.tuitionApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TuitionApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, TuitionApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TuitionApplication.
     * @param {TuitionApplicationUpsertArgs} args - Arguments to update or create a TuitionApplication.
     * @example
     * // Update or create a TuitionApplication
     * const tuitionApplication = await prisma.tuitionApplication.upsert({
     *   create: {
     *     // ... data to create a TuitionApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TuitionApplication we want to update
     *   }
     * })
     */
    upsert<T extends TuitionApplicationUpsertArgs>(args: SelectSubset<T, TuitionApplicationUpsertArgs<ExtArgs>>): Prisma__TuitionApplicationClient<$Result.GetResult<Prisma.$TuitionApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TuitionApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionApplicationCountArgs} args - Arguments to filter TuitionApplications to count.
     * @example
     * // Count the number of TuitionApplications
     * const count = await prisma.tuitionApplication.count({
     *   where: {
     *     // ... the filter for the TuitionApplications we want to count
     *   }
     * })
    **/
    count<T extends TuitionApplicationCountArgs>(
      args?: Subset<T, TuitionApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TuitionApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TuitionApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TuitionApplicationAggregateArgs>(args: Subset<T, TuitionApplicationAggregateArgs>): Prisma.PrismaPromise<GetTuitionApplicationAggregateType<T>>

    /**
     * Group by TuitionApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TuitionApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TuitionApplicationGroupByArgs['orderBy'] }
        : { orderBy?: TuitionApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TuitionApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTuitionApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TuitionApplication model
   */
  readonly fields: TuitionApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TuitionApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TuitionApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tuition<T extends TuitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TuitionDefaultArgs<ExtArgs>>): Prisma__TuitionClient<$Result.GetResult<Prisma.$TuitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tutor<T extends TutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorDefaultArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TuitionApplication model
   */
  interface TuitionApplicationFieldRefs {
    readonly id: FieldRef<"TuitionApplication", 'Int'>
    readonly tuitionId: FieldRef<"TuitionApplication", 'Int'>
    readonly tutorId: FieldRef<"TuitionApplication", 'Int'>
    readonly message: FieldRef<"TuitionApplication", 'String'>
    readonly status: FieldRef<"TuitionApplication", 'String'>
    readonly isRead: FieldRef<"TuitionApplication", 'Boolean'>
    readonly createdAt: FieldRef<"TuitionApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"TuitionApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TuitionApplication findUnique
   */
  export type TuitionApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TuitionApplication to fetch.
     */
    where: TuitionApplicationWhereUniqueInput
  }

  /**
   * TuitionApplication findUniqueOrThrow
   */
  export type TuitionApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TuitionApplication to fetch.
     */
    where: TuitionApplicationWhereUniqueInput
  }

  /**
   * TuitionApplication findFirst
   */
  export type TuitionApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TuitionApplication to fetch.
     */
    where?: TuitionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TuitionApplications to fetch.
     */
    orderBy?: TuitionApplicationOrderByWithRelationInput | TuitionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TuitionApplications.
     */
    cursor?: TuitionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TuitionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TuitionApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TuitionApplications.
     */
    distinct?: TuitionApplicationScalarFieldEnum | TuitionApplicationScalarFieldEnum[]
  }

  /**
   * TuitionApplication findFirstOrThrow
   */
  export type TuitionApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TuitionApplication to fetch.
     */
    where?: TuitionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TuitionApplications to fetch.
     */
    orderBy?: TuitionApplicationOrderByWithRelationInput | TuitionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TuitionApplications.
     */
    cursor?: TuitionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TuitionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TuitionApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TuitionApplications.
     */
    distinct?: TuitionApplicationScalarFieldEnum | TuitionApplicationScalarFieldEnum[]
  }

  /**
   * TuitionApplication findMany
   */
  export type TuitionApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TuitionApplications to fetch.
     */
    where?: TuitionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TuitionApplications to fetch.
     */
    orderBy?: TuitionApplicationOrderByWithRelationInput | TuitionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TuitionApplications.
     */
    cursor?: TuitionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TuitionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TuitionApplications.
     */
    skip?: number
    distinct?: TuitionApplicationScalarFieldEnum | TuitionApplicationScalarFieldEnum[]
  }

  /**
   * TuitionApplication create
   */
  export type TuitionApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a TuitionApplication.
     */
    data: XOR<TuitionApplicationCreateInput, TuitionApplicationUncheckedCreateInput>
  }

  /**
   * TuitionApplication createMany
   */
  export type TuitionApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TuitionApplications.
     */
    data: TuitionApplicationCreateManyInput | TuitionApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TuitionApplication createManyAndReturn
   */
  export type TuitionApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many TuitionApplications.
     */
    data: TuitionApplicationCreateManyInput | TuitionApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TuitionApplication update
   */
  export type TuitionApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a TuitionApplication.
     */
    data: XOR<TuitionApplicationUpdateInput, TuitionApplicationUncheckedUpdateInput>
    /**
     * Choose, which TuitionApplication to update.
     */
    where: TuitionApplicationWhereUniqueInput
  }

  /**
   * TuitionApplication updateMany
   */
  export type TuitionApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TuitionApplications.
     */
    data: XOR<TuitionApplicationUpdateManyMutationInput, TuitionApplicationUncheckedUpdateManyInput>
    /**
     * Filter which TuitionApplications to update
     */
    where?: TuitionApplicationWhereInput
    /**
     * Limit how many TuitionApplications to update.
     */
    limit?: number
  }

  /**
   * TuitionApplication updateManyAndReturn
   */
  export type TuitionApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * The data used to update TuitionApplications.
     */
    data: XOR<TuitionApplicationUpdateManyMutationInput, TuitionApplicationUncheckedUpdateManyInput>
    /**
     * Filter which TuitionApplications to update
     */
    where?: TuitionApplicationWhereInput
    /**
     * Limit how many TuitionApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TuitionApplication upsert
   */
  export type TuitionApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the TuitionApplication to update in case it exists.
     */
    where: TuitionApplicationWhereUniqueInput
    /**
     * In case the TuitionApplication found by the `where` argument doesn't exist, create a new TuitionApplication with this data.
     */
    create: XOR<TuitionApplicationCreateInput, TuitionApplicationUncheckedCreateInput>
    /**
     * In case the TuitionApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TuitionApplicationUpdateInput, TuitionApplicationUncheckedUpdateInput>
  }

  /**
   * TuitionApplication delete
   */
  export type TuitionApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
    /**
     * Filter which TuitionApplication to delete.
     */
    where: TuitionApplicationWhereUniqueInput
  }

  /**
   * TuitionApplication deleteMany
   */
  export type TuitionApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TuitionApplications to delete
     */
    where?: TuitionApplicationWhereInput
    /**
     * Limit how many TuitionApplications to delete.
     */
    limit?: number
  }

  /**
   * TuitionApplication without action
   */
  export type TuitionApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionApplication
     */
    select?: TuitionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionApplication
     */
    omit?: TuitionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionApplicationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TutorScalarFieldEnum: {
    id: 'id',
    institution: 'institution',
    subjects: 'subjects',
    year: 'year',
    name: 'name',
    email: 'email',
    location: 'location',
    sampleTeachingVideo: 'sampleTeachingVideo',
    subjectToTeach: 'subjectToTeach',
    userId: 'userId'
  };

  export type TutorScalarFieldEnum = (typeof TutorScalarFieldEnum)[keyof typeof TutorScalarFieldEnum]


  export const TuitionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    district: 'district',
    location: 'location',
    year: 'year',
    subjects: 'subjects',
    salary: 'salary',
    mode: 'mode',
    postedById: 'postedById'
  };

  export type TuitionScalarFieldEnum = (typeof TuitionScalarFieldEnum)[keyof typeof TuitionScalarFieldEnum]


  export const TuitionApplicationScalarFieldEnum: {
    id: 'id',
    tuitionId: 'tuitionId',
    tutorId: 'tutorId',
    message: 'message',
    status: 'status',
    isRead: 'isRead',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TuitionApplicationScalarFieldEnum = (typeof TuitionApplicationScalarFieldEnum)[keyof typeof TuitionApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TutorWhereInput = {
    AND?: TutorWhereInput | TutorWhereInput[]
    OR?: TutorWhereInput[]
    NOT?: TutorWhereInput | TutorWhereInput[]
    id?: IntFilter<"Tutor"> | number
    institution?: StringFilter<"Tutor"> | string
    subjects?: StringFilter<"Tutor"> | string
    year?: StringFilter<"Tutor"> | string
    name?: StringFilter<"Tutor"> | string
    email?: StringFilter<"Tutor"> | string
    location?: StringFilter<"Tutor"> | string
    sampleTeachingVideo?: StringFilter<"Tutor"> | string
    subjectToTeach?: StringFilter<"Tutor"> | string
    userId?: StringFilter<"Tutor"> | string
    applications?: TuitionApplicationListRelationFilter
  }

  export type TutorOrderByWithRelationInput = {
    id?: SortOrder
    institution?: SortOrder
    subjects?: SortOrder
    year?: SortOrder
    name?: SortOrder
    email?: SortOrder
    location?: SortOrder
    sampleTeachingVideo?: SortOrder
    subjectToTeach?: SortOrder
    userId?: SortOrder
    applications?: TuitionApplicationOrderByRelationAggregateInput
  }

  export type TutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: TutorWhereInput | TutorWhereInput[]
    OR?: TutorWhereInput[]
    NOT?: TutorWhereInput | TutorWhereInput[]
    institution?: StringFilter<"Tutor"> | string
    subjects?: StringFilter<"Tutor"> | string
    year?: StringFilter<"Tutor"> | string
    name?: StringFilter<"Tutor"> | string
    location?: StringFilter<"Tutor"> | string
    sampleTeachingVideo?: StringFilter<"Tutor"> | string
    subjectToTeach?: StringFilter<"Tutor"> | string
    userId?: StringFilter<"Tutor"> | string
    applications?: TuitionApplicationListRelationFilter
  }, "id" | "email">

  export type TutorOrderByWithAggregationInput = {
    id?: SortOrder
    institution?: SortOrder
    subjects?: SortOrder
    year?: SortOrder
    name?: SortOrder
    email?: SortOrder
    location?: SortOrder
    sampleTeachingVideo?: SortOrder
    subjectToTeach?: SortOrder
    userId?: SortOrder
    _count?: TutorCountOrderByAggregateInput
    _avg?: TutorAvgOrderByAggregateInput
    _max?: TutorMaxOrderByAggregateInput
    _min?: TutorMinOrderByAggregateInput
    _sum?: TutorSumOrderByAggregateInput
  }

  export type TutorScalarWhereWithAggregatesInput = {
    AND?: TutorScalarWhereWithAggregatesInput | TutorScalarWhereWithAggregatesInput[]
    OR?: TutorScalarWhereWithAggregatesInput[]
    NOT?: TutorScalarWhereWithAggregatesInput | TutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tutor"> | number
    institution?: StringWithAggregatesFilter<"Tutor"> | string
    subjects?: StringWithAggregatesFilter<"Tutor"> | string
    year?: StringWithAggregatesFilter<"Tutor"> | string
    name?: StringWithAggregatesFilter<"Tutor"> | string
    email?: StringWithAggregatesFilter<"Tutor"> | string
    location?: StringWithAggregatesFilter<"Tutor"> | string
    sampleTeachingVideo?: StringWithAggregatesFilter<"Tutor"> | string
    subjectToTeach?: StringWithAggregatesFilter<"Tutor"> | string
    userId?: StringWithAggregatesFilter<"Tutor"> | string
  }

  export type TuitionWhereInput = {
    AND?: TuitionWhereInput | TuitionWhereInput[]
    OR?: TuitionWhereInput[]
    NOT?: TuitionWhereInput | TuitionWhereInput[]
    id?: IntFilter<"Tuition"> | number
    description?: StringFilter<"Tuition"> | string
    district?: StringFilter<"Tuition"> | string
    location?: StringFilter<"Tuition"> | string
    year?: StringFilter<"Tuition"> | string
    subjects?: StringFilter<"Tuition"> | string
    salary?: StringFilter<"Tuition"> | string
    mode?: StringFilter<"Tuition"> | string
    postedById?: StringFilter<"Tuition"> | string
    applications?: TuitionApplicationListRelationFilter
  }

  export type TuitionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    district?: SortOrder
    location?: SortOrder
    year?: SortOrder
    subjects?: SortOrder
    salary?: SortOrder
    mode?: SortOrder
    postedById?: SortOrder
    applications?: TuitionApplicationOrderByRelationAggregateInput
  }

  export type TuitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TuitionWhereInput | TuitionWhereInput[]
    OR?: TuitionWhereInput[]
    NOT?: TuitionWhereInput | TuitionWhereInput[]
    description?: StringFilter<"Tuition"> | string
    district?: StringFilter<"Tuition"> | string
    location?: StringFilter<"Tuition"> | string
    year?: StringFilter<"Tuition"> | string
    subjects?: StringFilter<"Tuition"> | string
    salary?: StringFilter<"Tuition"> | string
    mode?: StringFilter<"Tuition"> | string
    postedById?: StringFilter<"Tuition"> | string
    applications?: TuitionApplicationListRelationFilter
  }, "id">

  export type TuitionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    district?: SortOrder
    location?: SortOrder
    year?: SortOrder
    subjects?: SortOrder
    salary?: SortOrder
    mode?: SortOrder
    postedById?: SortOrder
    _count?: TuitionCountOrderByAggregateInput
    _avg?: TuitionAvgOrderByAggregateInput
    _max?: TuitionMaxOrderByAggregateInput
    _min?: TuitionMinOrderByAggregateInput
    _sum?: TuitionSumOrderByAggregateInput
  }

  export type TuitionScalarWhereWithAggregatesInput = {
    AND?: TuitionScalarWhereWithAggregatesInput | TuitionScalarWhereWithAggregatesInput[]
    OR?: TuitionScalarWhereWithAggregatesInput[]
    NOT?: TuitionScalarWhereWithAggregatesInput | TuitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tuition"> | number
    description?: StringWithAggregatesFilter<"Tuition"> | string
    district?: StringWithAggregatesFilter<"Tuition"> | string
    location?: StringWithAggregatesFilter<"Tuition"> | string
    year?: StringWithAggregatesFilter<"Tuition"> | string
    subjects?: StringWithAggregatesFilter<"Tuition"> | string
    salary?: StringWithAggregatesFilter<"Tuition"> | string
    mode?: StringWithAggregatesFilter<"Tuition"> | string
    postedById?: StringWithAggregatesFilter<"Tuition"> | string
  }

  export type TuitionApplicationWhereInput = {
    AND?: TuitionApplicationWhereInput | TuitionApplicationWhereInput[]
    OR?: TuitionApplicationWhereInput[]
    NOT?: TuitionApplicationWhereInput | TuitionApplicationWhereInput[]
    id?: IntFilter<"TuitionApplication"> | number
    tuitionId?: IntFilter<"TuitionApplication"> | number
    tutorId?: IntFilter<"TuitionApplication"> | number
    message?: StringNullableFilter<"TuitionApplication"> | string | null
    status?: StringFilter<"TuitionApplication"> | string
    isRead?: BoolFilter<"TuitionApplication"> | boolean
    createdAt?: DateTimeFilter<"TuitionApplication"> | Date | string
    updatedAt?: DateTimeFilter<"TuitionApplication"> | Date | string
    tuition?: XOR<TuitionScalarRelationFilter, TuitionWhereInput>
    tutor?: XOR<TutorScalarRelationFilter, TutorWhereInput>
  }

  export type TuitionApplicationOrderByWithRelationInput = {
    id?: SortOrder
    tuitionId?: SortOrder
    tutorId?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tuition?: TuitionOrderByWithRelationInput
    tutor?: TutorOrderByWithRelationInput
  }

  export type TuitionApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tuitionId_tutorId?: TuitionApplicationTuitionIdTutorIdCompoundUniqueInput
    AND?: TuitionApplicationWhereInput | TuitionApplicationWhereInput[]
    OR?: TuitionApplicationWhereInput[]
    NOT?: TuitionApplicationWhereInput | TuitionApplicationWhereInput[]
    tuitionId?: IntFilter<"TuitionApplication"> | number
    tutorId?: IntFilter<"TuitionApplication"> | number
    message?: StringNullableFilter<"TuitionApplication"> | string | null
    status?: StringFilter<"TuitionApplication"> | string
    isRead?: BoolFilter<"TuitionApplication"> | boolean
    createdAt?: DateTimeFilter<"TuitionApplication"> | Date | string
    updatedAt?: DateTimeFilter<"TuitionApplication"> | Date | string
    tuition?: XOR<TuitionScalarRelationFilter, TuitionWhereInput>
    tutor?: XOR<TutorScalarRelationFilter, TutorWhereInput>
  }, "id" | "tuitionId_tutorId">

  export type TuitionApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    tuitionId?: SortOrder
    tutorId?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TuitionApplicationCountOrderByAggregateInput
    _avg?: TuitionApplicationAvgOrderByAggregateInput
    _max?: TuitionApplicationMaxOrderByAggregateInput
    _min?: TuitionApplicationMinOrderByAggregateInput
    _sum?: TuitionApplicationSumOrderByAggregateInput
  }

  export type TuitionApplicationScalarWhereWithAggregatesInput = {
    AND?: TuitionApplicationScalarWhereWithAggregatesInput | TuitionApplicationScalarWhereWithAggregatesInput[]
    OR?: TuitionApplicationScalarWhereWithAggregatesInput[]
    NOT?: TuitionApplicationScalarWhereWithAggregatesInput | TuitionApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TuitionApplication"> | number
    tuitionId?: IntWithAggregatesFilter<"TuitionApplication"> | number
    tutorId?: IntWithAggregatesFilter<"TuitionApplication"> | number
    message?: StringNullableWithAggregatesFilter<"TuitionApplication"> | string | null
    status?: StringWithAggregatesFilter<"TuitionApplication"> | string
    isRead?: BoolWithAggregatesFilter<"TuitionApplication"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TuitionApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TuitionApplication"> | Date | string
  }

  export type TutorCreateInput = {
    institution: string
    subjects: string
    year: string
    name: string
    email: string
    location: string
    sampleTeachingVideo: string
    subjectToTeach: string
    userId: string
    applications?: TuitionApplicationCreateNestedManyWithoutTutorInput
  }

  export type TutorUncheckedCreateInput = {
    id?: number
    institution: string
    subjects: string
    year: string
    name: string
    email: string
    location: string
    sampleTeachingVideo: string
    subjectToTeach: string
    userId: string
    applications?: TuitionApplicationUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorUpdateInput = {
    institution?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    sampleTeachingVideo?: StringFieldUpdateOperationsInput | string
    subjectToTeach?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    applications?: TuitionApplicationUpdateManyWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    sampleTeachingVideo?: StringFieldUpdateOperationsInput | string
    subjectToTeach?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    applications?: TuitionApplicationUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type TutorCreateManyInput = {
    id?: number
    institution: string
    subjects: string
    year: string
    name: string
    email: string
    location: string
    sampleTeachingVideo: string
    subjectToTeach: string
    userId: string
  }

  export type TutorUpdateManyMutationInput = {
    institution?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    sampleTeachingVideo?: StringFieldUpdateOperationsInput | string
    subjectToTeach?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    sampleTeachingVideo?: StringFieldUpdateOperationsInput | string
    subjectToTeach?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TuitionCreateInput = {
    description: string
    district: string
    location: string
    year: string
    subjects: string
    salary: string
    mode: string
    postedById: string
    applications?: TuitionApplicationCreateNestedManyWithoutTuitionInput
  }

  export type TuitionUncheckedCreateInput = {
    id?: number
    description: string
    district: string
    location: string
    year: string
    subjects: string
    salary: string
    mode: string
    postedById: string
    applications?: TuitionApplicationUncheckedCreateNestedManyWithoutTuitionInput
  }

  export type TuitionUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    postedById?: StringFieldUpdateOperationsInput | string
    applications?: TuitionApplicationUpdateManyWithoutTuitionNestedInput
  }

  export type TuitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    postedById?: StringFieldUpdateOperationsInput | string
    applications?: TuitionApplicationUncheckedUpdateManyWithoutTuitionNestedInput
  }

  export type TuitionCreateManyInput = {
    id?: number
    description: string
    district: string
    location: string
    year: string
    subjects: string
    salary: string
    mode: string
    postedById: string
  }

  export type TuitionUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    postedById?: StringFieldUpdateOperationsInput | string
  }

  export type TuitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    postedById?: StringFieldUpdateOperationsInput | string
  }

  export type TuitionApplicationCreateInput = {
    message?: string | null
    status?: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tuition: TuitionCreateNestedOneWithoutApplicationsInput
    tutor: TutorCreateNestedOneWithoutApplicationsInput
  }

  export type TuitionApplicationUncheckedCreateInput = {
    id?: number
    tuitionId: number
    tutorId: number
    message?: string | null
    status?: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TuitionApplicationUpdateInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tuition?: TuitionUpdateOneRequiredWithoutApplicationsNestedInput
    tutor?: TutorUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type TuitionApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionId?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TuitionApplicationCreateManyInput = {
    id?: number
    tuitionId: number
    tutorId: number
    message?: string | null
    status?: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TuitionApplicationUpdateManyMutationInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TuitionApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionId?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TuitionApplicationListRelationFilter = {
    every?: TuitionApplicationWhereInput
    some?: TuitionApplicationWhereInput
    none?: TuitionApplicationWhereInput
  }

  export type TuitionApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorCountOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    subjects?: SortOrder
    year?: SortOrder
    name?: SortOrder
    email?: SortOrder
    location?: SortOrder
    sampleTeachingVideo?: SortOrder
    subjectToTeach?: SortOrder
    userId?: SortOrder
  }

  export type TutorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TutorMaxOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    subjects?: SortOrder
    year?: SortOrder
    name?: SortOrder
    email?: SortOrder
    location?: SortOrder
    sampleTeachingVideo?: SortOrder
    subjectToTeach?: SortOrder
    userId?: SortOrder
  }

  export type TutorMinOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    subjects?: SortOrder
    year?: SortOrder
    name?: SortOrder
    email?: SortOrder
    location?: SortOrder
    sampleTeachingVideo?: SortOrder
    subjectToTeach?: SortOrder
    userId?: SortOrder
  }

  export type TutorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TuitionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    district?: SortOrder
    location?: SortOrder
    year?: SortOrder
    subjects?: SortOrder
    salary?: SortOrder
    mode?: SortOrder
    postedById?: SortOrder
  }

  export type TuitionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TuitionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    district?: SortOrder
    location?: SortOrder
    year?: SortOrder
    subjects?: SortOrder
    salary?: SortOrder
    mode?: SortOrder
    postedById?: SortOrder
  }

  export type TuitionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    district?: SortOrder
    location?: SortOrder
    year?: SortOrder
    subjects?: SortOrder
    salary?: SortOrder
    mode?: SortOrder
    postedById?: SortOrder
  }

  export type TuitionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TuitionScalarRelationFilter = {
    is?: TuitionWhereInput
    isNot?: TuitionWhereInput
  }

  export type TutorScalarRelationFilter = {
    is?: TutorWhereInput
    isNot?: TutorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TuitionApplicationTuitionIdTutorIdCompoundUniqueInput = {
    tuitionId: number
    tutorId: number
  }

  export type TuitionApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    tuitionId?: SortOrder
    tutorId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TuitionApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    tuitionId?: SortOrder
    tutorId?: SortOrder
  }

  export type TuitionApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    tuitionId?: SortOrder
    tutorId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TuitionApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    tuitionId?: SortOrder
    tutorId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TuitionApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    tuitionId?: SortOrder
    tutorId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TuitionApplicationCreateNestedManyWithoutTutorInput = {
    create?: XOR<TuitionApplicationCreateWithoutTutorInput, TuitionApplicationUncheckedCreateWithoutTutorInput> | TuitionApplicationCreateWithoutTutorInput[] | TuitionApplicationUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TuitionApplicationCreateOrConnectWithoutTutorInput | TuitionApplicationCreateOrConnectWithoutTutorInput[]
    createMany?: TuitionApplicationCreateManyTutorInputEnvelope
    connect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
  }

  export type TuitionApplicationUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<TuitionApplicationCreateWithoutTutorInput, TuitionApplicationUncheckedCreateWithoutTutorInput> | TuitionApplicationCreateWithoutTutorInput[] | TuitionApplicationUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TuitionApplicationCreateOrConnectWithoutTutorInput | TuitionApplicationCreateOrConnectWithoutTutorInput[]
    createMany?: TuitionApplicationCreateManyTutorInputEnvelope
    connect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TuitionApplicationUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TuitionApplicationCreateWithoutTutorInput, TuitionApplicationUncheckedCreateWithoutTutorInput> | TuitionApplicationCreateWithoutTutorInput[] | TuitionApplicationUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TuitionApplicationCreateOrConnectWithoutTutorInput | TuitionApplicationCreateOrConnectWithoutTutorInput[]
    upsert?: TuitionApplicationUpsertWithWhereUniqueWithoutTutorInput | TuitionApplicationUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TuitionApplicationCreateManyTutorInputEnvelope
    set?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    disconnect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    delete?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    connect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    update?: TuitionApplicationUpdateWithWhereUniqueWithoutTutorInput | TuitionApplicationUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TuitionApplicationUpdateManyWithWhereWithoutTutorInput | TuitionApplicationUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TuitionApplicationScalarWhereInput | TuitionApplicationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TuitionApplicationUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TuitionApplicationCreateWithoutTutorInput, TuitionApplicationUncheckedCreateWithoutTutorInput> | TuitionApplicationCreateWithoutTutorInput[] | TuitionApplicationUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TuitionApplicationCreateOrConnectWithoutTutorInput | TuitionApplicationCreateOrConnectWithoutTutorInput[]
    upsert?: TuitionApplicationUpsertWithWhereUniqueWithoutTutorInput | TuitionApplicationUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TuitionApplicationCreateManyTutorInputEnvelope
    set?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    disconnect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    delete?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    connect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    update?: TuitionApplicationUpdateWithWhereUniqueWithoutTutorInput | TuitionApplicationUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TuitionApplicationUpdateManyWithWhereWithoutTutorInput | TuitionApplicationUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TuitionApplicationScalarWhereInput | TuitionApplicationScalarWhereInput[]
  }

  export type TuitionApplicationCreateNestedManyWithoutTuitionInput = {
    create?: XOR<TuitionApplicationCreateWithoutTuitionInput, TuitionApplicationUncheckedCreateWithoutTuitionInput> | TuitionApplicationCreateWithoutTuitionInput[] | TuitionApplicationUncheckedCreateWithoutTuitionInput[]
    connectOrCreate?: TuitionApplicationCreateOrConnectWithoutTuitionInput | TuitionApplicationCreateOrConnectWithoutTuitionInput[]
    createMany?: TuitionApplicationCreateManyTuitionInputEnvelope
    connect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
  }

  export type TuitionApplicationUncheckedCreateNestedManyWithoutTuitionInput = {
    create?: XOR<TuitionApplicationCreateWithoutTuitionInput, TuitionApplicationUncheckedCreateWithoutTuitionInput> | TuitionApplicationCreateWithoutTuitionInput[] | TuitionApplicationUncheckedCreateWithoutTuitionInput[]
    connectOrCreate?: TuitionApplicationCreateOrConnectWithoutTuitionInput | TuitionApplicationCreateOrConnectWithoutTuitionInput[]
    createMany?: TuitionApplicationCreateManyTuitionInputEnvelope
    connect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
  }

  export type TuitionApplicationUpdateManyWithoutTuitionNestedInput = {
    create?: XOR<TuitionApplicationCreateWithoutTuitionInput, TuitionApplicationUncheckedCreateWithoutTuitionInput> | TuitionApplicationCreateWithoutTuitionInput[] | TuitionApplicationUncheckedCreateWithoutTuitionInput[]
    connectOrCreate?: TuitionApplicationCreateOrConnectWithoutTuitionInput | TuitionApplicationCreateOrConnectWithoutTuitionInput[]
    upsert?: TuitionApplicationUpsertWithWhereUniqueWithoutTuitionInput | TuitionApplicationUpsertWithWhereUniqueWithoutTuitionInput[]
    createMany?: TuitionApplicationCreateManyTuitionInputEnvelope
    set?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    disconnect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    delete?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    connect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    update?: TuitionApplicationUpdateWithWhereUniqueWithoutTuitionInput | TuitionApplicationUpdateWithWhereUniqueWithoutTuitionInput[]
    updateMany?: TuitionApplicationUpdateManyWithWhereWithoutTuitionInput | TuitionApplicationUpdateManyWithWhereWithoutTuitionInput[]
    deleteMany?: TuitionApplicationScalarWhereInput | TuitionApplicationScalarWhereInput[]
  }

  export type TuitionApplicationUncheckedUpdateManyWithoutTuitionNestedInput = {
    create?: XOR<TuitionApplicationCreateWithoutTuitionInput, TuitionApplicationUncheckedCreateWithoutTuitionInput> | TuitionApplicationCreateWithoutTuitionInput[] | TuitionApplicationUncheckedCreateWithoutTuitionInput[]
    connectOrCreate?: TuitionApplicationCreateOrConnectWithoutTuitionInput | TuitionApplicationCreateOrConnectWithoutTuitionInput[]
    upsert?: TuitionApplicationUpsertWithWhereUniqueWithoutTuitionInput | TuitionApplicationUpsertWithWhereUniqueWithoutTuitionInput[]
    createMany?: TuitionApplicationCreateManyTuitionInputEnvelope
    set?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    disconnect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    delete?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    connect?: TuitionApplicationWhereUniqueInput | TuitionApplicationWhereUniqueInput[]
    update?: TuitionApplicationUpdateWithWhereUniqueWithoutTuitionInput | TuitionApplicationUpdateWithWhereUniqueWithoutTuitionInput[]
    updateMany?: TuitionApplicationUpdateManyWithWhereWithoutTuitionInput | TuitionApplicationUpdateManyWithWhereWithoutTuitionInput[]
    deleteMany?: TuitionApplicationScalarWhereInput | TuitionApplicationScalarWhereInput[]
  }

  export type TuitionCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<TuitionCreateWithoutApplicationsInput, TuitionUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: TuitionCreateOrConnectWithoutApplicationsInput
    connect?: TuitionWhereUniqueInput
  }

  export type TutorCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<TutorCreateWithoutApplicationsInput, TutorUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: TutorCreateOrConnectWithoutApplicationsInput
    connect?: TutorWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TuitionUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<TuitionCreateWithoutApplicationsInput, TuitionUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: TuitionCreateOrConnectWithoutApplicationsInput
    upsert?: TuitionUpsertWithoutApplicationsInput
    connect?: TuitionWhereUniqueInput
    update?: XOR<XOR<TuitionUpdateToOneWithWhereWithoutApplicationsInput, TuitionUpdateWithoutApplicationsInput>, TuitionUncheckedUpdateWithoutApplicationsInput>
  }

  export type TutorUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<TutorCreateWithoutApplicationsInput, TutorUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: TutorCreateOrConnectWithoutApplicationsInput
    upsert?: TutorUpsertWithoutApplicationsInput
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutApplicationsInput, TutorUpdateWithoutApplicationsInput>, TutorUncheckedUpdateWithoutApplicationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TuitionApplicationCreateWithoutTutorInput = {
    message?: string | null
    status?: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tuition: TuitionCreateNestedOneWithoutApplicationsInput
  }

  export type TuitionApplicationUncheckedCreateWithoutTutorInput = {
    id?: number
    tuitionId: number
    message?: string | null
    status?: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TuitionApplicationCreateOrConnectWithoutTutorInput = {
    where: TuitionApplicationWhereUniqueInput
    create: XOR<TuitionApplicationCreateWithoutTutorInput, TuitionApplicationUncheckedCreateWithoutTutorInput>
  }

  export type TuitionApplicationCreateManyTutorInputEnvelope = {
    data: TuitionApplicationCreateManyTutorInput | TuitionApplicationCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type TuitionApplicationUpsertWithWhereUniqueWithoutTutorInput = {
    where: TuitionApplicationWhereUniqueInput
    update: XOR<TuitionApplicationUpdateWithoutTutorInput, TuitionApplicationUncheckedUpdateWithoutTutorInput>
    create: XOR<TuitionApplicationCreateWithoutTutorInput, TuitionApplicationUncheckedCreateWithoutTutorInput>
  }

  export type TuitionApplicationUpdateWithWhereUniqueWithoutTutorInput = {
    where: TuitionApplicationWhereUniqueInput
    data: XOR<TuitionApplicationUpdateWithoutTutorInput, TuitionApplicationUncheckedUpdateWithoutTutorInput>
  }

  export type TuitionApplicationUpdateManyWithWhereWithoutTutorInput = {
    where: TuitionApplicationScalarWhereInput
    data: XOR<TuitionApplicationUpdateManyMutationInput, TuitionApplicationUncheckedUpdateManyWithoutTutorInput>
  }

  export type TuitionApplicationScalarWhereInput = {
    AND?: TuitionApplicationScalarWhereInput | TuitionApplicationScalarWhereInput[]
    OR?: TuitionApplicationScalarWhereInput[]
    NOT?: TuitionApplicationScalarWhereInput | TuitionApplicationScalarWhereInput[]
    id?: IntFilter<"TuitionApplication"> | number
    tuitionId?: IntFilter<"TuitionApplication"> | number
    tutorId?: IntFilter<"TuitionApplication"> | number
    message?: StringNullableFilter<"TuitionApplication"> | string | null
    status?: StringFilter<"TuitionApplication"> | string
    isRead?: BoolFilter<"TuitionApplication"> | boolean
    createdAt?: DateTimeFilter<"TuitionApplication"> | Date | string
    updatedAt?: DateTimeFilter<"TuitionApplication"> | Date | string
  }

  export type TuitionApplicationCreateWithoutTuitionInput = {
    message?: string | null
    status?: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tutor: TutorCreateNestedOneWithoutApplicationsInput
  }

  export type TuitionApplicationUncheckedCreateWithoutTuitionInput = {
    id?: number
    tutorId: number
    message?: string | null
    status?: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TuitionApplicationCreateOrConnectWithoutTuitionInput = {
    where: TuitionApplicationWhereUniqueInput
    create: XOR<TuitionApplicationCreateWithoutTuitionInput, TuitionApplicationUncheckedCreateWithoutTuitionInput>
  }

  export type TuitionApplicationCreateManyTuitionInputEnvelope = {
    data: TuitionApplicationCreateManyTuitionInput | TuitionApplicationCreateManyTuitionInput[]
    skipDuplicates?: boolean
  }

  export type TuitionApplicationUpsertWithWhereUniqueWithoutTuitionInput = {
    where: TuitionApplicationWhereUniqueInput
    update: XOR<TuitionApplicationUpdateWithoutTuitionInput, TuitionApplicationUncheckedUpdateWithoutTuitionInput>
    create: XOR<TuitionApplicationCreateWithoutTuitionInput, TuitionApplicationUncheckedCreateWithoutTuitionInput>
  }

  export type TuitionApplicationUpdateWithWhereUniqueWithoutTuitionInput = {
    where: TuitionApplicationWhereUniqueInput
    data: XOR<TuitionApplicationUpdateWithoutTuitionInput, TuitionApplicationUncheckedUpdateWithoutTuitionInput>
  }

  export type TuitionApplicationUpdateManyWithWhereWithoutTuitionInput = {
    where: TuitionApplicationScalarWhereInput
    data: XOR<TuitionApplicationUpdateManyMutationInput, TuitionApplicationUncheckedUpdateManyWithoutTuitionInput>
  }

  export type TuitionCreateWithoutApplicationsInput = {
    description: string
    district: string
    location: string
    year: string
    subjects: string
    salary: string
    mode: string
    postedById: string
  }

  export type TuitionUncheckedCreateWithoutApplicationsInput = {
    id?: number
    description: string
    district: string
    location: string
    year: string
    subjects: string
    salary: string
    mode: string
    postedById: string
  }

  export type TuitionCreateOrConnectWithoutApplicationsInput = {
    where: TuitionWhereUniqueInput
    create: XOR<TuitionCreateWithoutApplicationsInput, TuitionUncheckedCreateWithoutApplicationsInput>
  }

  export type TutorCreateWithoutApplicationsInput = {
    institution: string
    subjects: string
    year: string
    name: string
    email: string
    location: string
    sampleTeachingVideo: string
    subjectToTeach: string
    userId: string
  }

  export type TutorUncheckedCreateWithoutApplicationsInput = {
    id?: number
    institution: string
    subjects: string
    year: string
    name: string
    email: string
    location: string
    sampleTeachingVideo: string
    subjectToTeach: string
    userId: string
  }

  export type TutorCreateOrConnectWithoutApplicationsInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutApplicationsInput, TutorUncheckedCreateWithoutApplicationsInput>
  }

  export type TuitionUpsertWithoutApplicationsInput = {
    update: XOR<TuitionUpdateWithoutApplicationsInput, TuitionUncheckedUpdateWithoutApplicationsInput>
    create: XOR<TuitionCreateWithoutApplicationsInput, TuitionUncheckedCreateWithoutApplicationsInput>
    where?: TuitionWhereInput
  }

  export type TuitionUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: TuitionWhereInput
    data: XOR<TuitionUpdateWithoutApplicationsInput, TuitionUncheckedUpdateWithoutApplicationsInput>
  }

  export type TuitionUpdateWithoutApplicationsInput = {
    description?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    postedById?: StringFieldUpdateOperationsInput | string
  }

  export type TuitionUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    postedById?: StringFieldUpdateOperationsInput | string
  }

  export type TutorUpsertWithoutApplicationsInput = {
    update: XOR<TutorUpdateWithoutApplicationsInput, TutorUncheckedUpdateWithoutApplicationsInput>
    create: XOR<TutorCreateWithoutApplicationsInput, TutorUncheckedCreateWithoutApplicationsInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutApplicationsInput, TutorUncheckedUpdateWithoutApplicationsInput>
  }

  export type TutorUpdateWithoutApplicationsInput = {
    institution?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    sampleTeachingVideo?: StringFieldUpdateOperationsInput | string
    subjectToTeach?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TutorUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    subjects?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    sampleTeachingVideo?: StringFieldUpdateOperationsInput | string
    subjectToTeach?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TuitionApplicationCreateManyTutorInput = {
    id?: number
    tuitionId: number
    message?: string | null
    status?: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TuitionApplicationUpdateWithoutTutorInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tuition?: TuitionUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type TuitionApplicationUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TuitionApplicationUncheckedUpdateManyWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TuitionApplicationCreateManyTuitionInput = {
    id?: number
    tutorId: number
    message?: string | null
    status?: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TuitionApplicationUpdateWithoutTuitionInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: TutorUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type TuitionApplicationUncheckedUpdateWithoutTuitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TuitionApplicationUncheckedUpdateManyWithoutTuitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}