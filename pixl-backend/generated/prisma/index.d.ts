
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventAttendee
 * 
 */
export type EventAttendee = $Result.DefaultSelection<Prisma.$EventAttendeePayload>
/**
 * Model PaymentIntent
 * 
 */
export type PaymentIntent = $Result.DefaultSelection<Prisma.$PaymentIntentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventAttendee`: Exposes CRUD operations for the **EventAttendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventAttendees
    * const eventAttendees = await prisma.eventAttendee.findMany()
    * ```
    */
  get eventAttendee(): Prisma.EventAttendeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentIntent`: Exposes CRUD operations for the **PaymentIntent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentIntents
    * const paymentIntents = await prisma.paymentIntent.findMany()
    * ```
    */
  get paymentIntent(): Prisma.PaymentIntentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Event: 'Event',
    EventAttendee: 'EventAttendee',
    PaymentIntent: 'PaymentIntent'
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
      modelProps: "user" | "event" | "eventAttendee" | "paymentIntent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventAttendee: {
        payload: Prisma.$EventAttendeePayload<ExtArgs>
        fields: Prisma.EventAttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventAttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventAttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          findFirst: {
            args: Prisma.EventAttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventAttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          findMany: {
            args: Prisma.EventAttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          create: {
            args: Prisma.EventAttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          createMany: {
            args: Prisma.EventAttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventAttendeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          delete: {
            args: Prisma.EventAttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          update: {
            args: Prisma.EventAttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          deleteMany: {
            args: Prisma.EventAttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventAttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventAttendeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          upsert: {
            args: Prisma.EventAttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          aggregate: {
            args: Prisma.EventAttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventAttendee>
          }
          groupBy: {
            args: Prisma.EventAttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventAttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventAttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<EventAttendeeCountAggregateOutputType> | number
          }
        }
      }
      PaymentIntent: {
        payload: Prisma.$PaymentIntentPayload<ExtArgs>
        fields: Prisma.PaymentIntentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentIntentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentIntentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          findFirst: {
            args: Prisma.PaymentIntentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentIntentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          findMany: {
            args: Prisma.PaymentIntentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>[]
          }
          create: {
            args: Prisma.PaymentIntentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          createMany: {
            args: Prisma.PaymentIntentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentIntentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>[]
          }
          delete: {
            args: Prisma.PaymentIntentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          update: {
            args: Prisma.PaymentIntentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentIntentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentIntentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentIntentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentIntentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentIntentPayload>
          }
          aggregate: {
            args: Prisma.PaymentIntentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentIntent>
          }
          groupBy: {
            args: Prisma.PaymentIntentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentIntentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentIntentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentIntentCountAggregateOutputType> | number
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
    user?: UserOmit
    event?: EventOmit
    eventAttendee?: EventAttendeeOmit
    paymentIntent?: PaymentIntentOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    events: number
    attending: number
    paymentIntents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UserCountOutputTypeCountEventsArgs
    attending?: boolean | UserCountOutputTypeCountAttendingArgs
    paymentIntents?: boolean | UserCountOutputTypeCountPaymentIntentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentIntentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentIntentWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    attendees: number
    paymentIntents: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | EventCountOutputTypeCountAttendeesArgs
    paymentIntents?: boolean | EventCountOutputTypeCountPaymentIntentsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountPaymentIntentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentIntentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    resetToken: number
    resetTokenExpiry: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    resetToken: string | null
    resetTokenExpiry: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    events?: boolean | User$eventsArgs<ExtArgs>
    attending?: boolean | User$attendingArgs<ExtArgs>
    paymentIntents?: boolean | User$paymentIntentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "resetToken" | "resetTokenExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | User$eventsArgs<ExtArgs>
    attending?: boolean | User$attendingArgs<ExtArgs>
    paymentIntents?: boolean | User$paymentIntentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      attending: Prisma.$EventAttendeePayload<ExtArgs>[]
      paymentIntents: Prisma.$PaymentIntentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      resetToken: string | null
      resetTokenExpiry: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attending<T extends User$attendingArgs<ExtArgs> = {}>(args?: Subset<T, User$attendingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentIntents<T extends User$paymentIntentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentIntentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.attending
   */
  export type User$attendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    cursor?: EventAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * User.paymentIntents
   */
  export type User$paymentIntentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    where?: PaymentIntentWhereInput
    orderBy?: PaymentIntentOrderByWithRelationInput | PaymentIntentOrderByWithRelationInput[]
    cursor?: PaymentIntentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentIntentScalarFieldEnum | PaymentIntentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    price: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    price: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    location: number
    createdAt: number
    updatedAt: number
    userId: number
    price: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    userId?: true
    price?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    userId?: true
    price?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    price?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    price?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    price?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    description: string
    date: Date
    location: string
    createdAt: Date
    updatedAt: Date
    userId: number | null
    price: number | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    price?: boolean
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    user?: boolean | Event$userArgs<ExtArgs>
    paymentIntents?: boolean | Event$paymentIntentsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    price?: boolean
    user?: boolean | Event$userArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    price?: boolean
    user?: boolean | Event$userArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    price?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "location" | "createdAt" | "updatedAt" | "userId" | "price", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    user?: boolean | Event$userArgs<ExtArgs>
    paymentIntents?: boolean | Event$paymentIntentsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Event$userArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Event$userArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      attendees: Prisma.$EventAttendeePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      paymentIntents: Prisma.$PaymentIntentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      date: Date
      location: string
      createdAt: Date
      updatedAt: Date
      userId: number | null
      price: number | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendees<T extends Event$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Event$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Event$userArgs<ExtArgs> = {}>(args?: Subset<T, Event$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paymentIntents<T extends Event$paymentIntentsArgs<ExtArgs> = {}>(args?: Subset<T, Event$paymentIntentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly userId: FieldRef<"Event", 'Int'>
    readonly price: FieldRef<"Event", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.attendees
   */
  export type Event$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    cursor?: EventAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * Event.user
   */
  export type Event$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Event.paymentIntents
   */
  export type Event$paymentIntentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    where?: PaymentIntentWhereInput
    orderBy?: PaymentIntentOrderByWithRelationInput | PaymentIntentOrderByWithRelationInput[]
    cursor?: PaymentIntentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentIntentScalarFieldEnum | PaymentIntentScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventAttendee
   */

  export type AggregateEventAttendee = {
    _count: EventAttendeeCountAggregateOutputType | null
    _avg: EventAttendeeAvgAggregateOutputType | null
    _sum: EventAttendeeSumAggregateOutputType | null
    _min: EventAttendeeMinAggregateOutputType | null
    _max: EventAttendeeMaxAggregateOutputType | null
  }

  export type EventAttendeeAvgAggregateOutputType = {
    userId: number | null
    eventId: number | null
  }

  export type EventAttendeeSumAggregateOutputType = {
    userId: number | null
    eventId: number | null
  }

  export type EventAttendeeMinAggregateOutputType = {
    userId: number | null
    eventId: number | null
    createdAt: Date | null
    hasPaid: boolean | null
  }

  export type EventAttendeeMaxAggregateOutputType = {
    userId: number | null
    eventId: number | null
    createdAt: Date | null
    hasPaid: boolean | null
  }

  export type EventAttendeeCountAggregateOutputType = {
    userId: number
    eventId: number
    createdAt: number
    hasPaid: number
    _all: number
  }


  export type EventAttendeeAvgAggregateInputType = {
    userId?: true
    eventId?: true
  }

  export type EventAttendeeSumAggregateInputType = {
    userId?: true
    eventId?: true
  }

  export type EventAttendeeMinAggregateInputType = {
    userId?: true
    eventId?: true
    createdAt?: true
    hasPaid?: true
  }

  export type EventAttendeeMaxAggregateInputType = {
    userId?: true
    eventId?: true
    createdAt?: true
    hasPaid?: true
  }

  export type EventAttendeeCountAggregateInputType = {
    userId?: true
    eventId?: true
    createdAt?: true
    hasPaid?: true
    _all?: true
  }

  export type EventAttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAttendee to aggregate.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventAttendees
    **/
    _count?: true | EventAttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAttendeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventAttendeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventAttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventAttendeeMaxAggregateInputType
  }

  export type GetEventAttendeeAggregateType<T extends EventAttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventAttendee[P]>
      : GetScalarType<T[P], AggregateEventAttendee[P]>
  }




  export type EventAttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithAggregationInput | EventAttendeeOrderByWithAggregationInput[]
    by: EventAttendeeScalarFieldEnum[] | EventAttendeeScalarFieldEnum
    having?: EventAttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventAttendeeCountAggregateInputType | true
    _avg?: EventAttendeeAvgAggregateInputType
    _sum?: EventAttendeeSumAggregateInputType
    _min?: EventAttendeeMinAggregateInputType
    _max?: EventAttendeeMaxAggregateInputType
  }

  export type EventAttendeeGroupByOutputType = {
    userId: number
    eventId: number
    createdAt: Date
    hasPaid: boolean
    _count: EventAttendeeCountAggregateOutputType | null
    _avg: EventAttendeeAvgAggregateOutputType | null
    _sum: EventAttendeeSumAggregateOutputType | null
    _min: EventAttendeeMinAggregateOutputType | null
    _max: EventAttendeeMaxAggregateOutputType | null
  }

  type GetEventAttendeeGroupByPayload<T extends EventAttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventAttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventAttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventAttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], EventAttendeeGroupByOutputType[P]>
        }
      >
    >


  export type EventAttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    hasPaid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    hasPaid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    hasPaid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectScalar = {
    userId?: boolean
    eventId?: boolean
    createdAt?: boolean
    hasPaid?: boolean
  }

  export type EventAttendeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "eventId" | "createdAt" | "hasPaid", ExtArgs["result"]["eventAttendee"]>
  export type EventAttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventAttendeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventAttendeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventAttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventAttendee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      eventId: number
      createdAt: Date
      hasPaid: boolean
    }, ExtArgs["result"]["eventAttendee"]>
    composites: {}
  }

  type EventAttendeeGetPayload<S extends boolean | null | undefined | EventAttendeeDefaultArgs> = $Result.GetResult<Prisma.$EventAttendeePayload, S>

  type EventAttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventAttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventAttendeeCountAggregateInputType | true
    }

  export interface EventAttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventAttendee'], meta: { name: 'EventAttendee' } }
    /**
     * Find zero or one EventAttendee that matches the filter.
     * @param {EventAttendeeFindUniqueArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventAttendeeFindUniqueArgs>(args: SelectSubset<T, EventAttendeeFindUniqueArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventAttendee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventAttendeeFindUniqueOrThrowArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventAttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventAttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventAttendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindFirstArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventAttendeeFindFirstArgs>(args?: SelectSubset<T, EventAttendeeFindFirstArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventAttendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindFirstOrThrowArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventAttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventAttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventAttendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventAttendees
     * const eventAttendees = await prisma.eventAttendee.findMany()
     * 
     * // Get first 10 EventAttendees
     * const eventAttendees = await prisma.eventAttendee.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const eventAttendeeWithUserIdOnly = await prisma.eventAttendee.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends EventAttendeeFindManyArgs>(args?: SelectSubset<T, EventAttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventAttendee.
     * @param {EventAttendeeCreateArgs} args - Arguments to create a EventAttendee.
     * @example
     * // Create one EventAttendee
     * const EventAttendee = await prisma.eventAttendee.create({
     *   data: {
     *     // ... data to create a EventAttendee
     *   }
     * })
     * 
     */
    create<T extends EventAttendeeCreateArgs>(args: SelectSubset<T, EventAttendeeCreateArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventAttendees.
     * @param {EventAttendeeCreateManyArgs} args - Arguments to create many EventAttendees.
     * @example
     * // Create many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventAttendeeCreateManyArgs>(args?: SelectSubset<T, EventAttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventAttendees and returns the data saved in the database.
     * @param {EventAttendeeCreateManyAndReturnArgs} args - Arguments to create many EventAttendees.
     * @example
     * // Create many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventAttendees and only return the `userId`
     * const eventAttendeeWithUserIdOnly = await prisma.eventAttendee.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventAttendeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventAttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventAttendee.
     * @param {EventAttendeeDeleteArgs} args - Arguments to delete one EventAttendee.
     * @example
     * // Delete one EventAttendee
     * const EventAttendee = await prisma.eventAttendee.delete({
     *   where: {
     *     // ... filter to delete one EventAttendee
     *   }
     * })
     * 
     */
    delete<T extends EventAttendeeDeleteArgs>(args: SelectSubset<T, EventAttendeeDeleteArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventAttendee.
     * @param {EventAttendeeUpdateArgs} args - Arguments to update one EventAttendee.
     * @example
     * // Update one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventAttendeeUpdateArgs>(args: SelectSubset<T, EventAttendeeUpdateArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventAttendees.
     * @param {EventAttendeeDeleteManyArgs} args - Arguments to filter EventAttendees to delete.
     * @example
     * // Delete a few EventAttendees
     * const { count } = await prisma.eventAttendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventAttendeeDeleteManyArgs>(args?: SelectSubset<T, EventAttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventAttendeeUpdateManyArgs>(args: SelectSubset<T, EventAttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAttendees and returns the data updated in the database.
     * @param {EventAttendeeUpdateManyAndReturnArgs} args - Arguments to update many EventAttendees.
     * @example
     * // Update many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventAttendees and only return the `userId`
     * const eventAttendeeWithUserIdOnly = await prisma.eventAttendee.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends EventAttendeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EventAttendeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventAttendee.
     * @param {EventAttendeeUpsertArgs} args - Arguments to update or create a EventAttendee.
     * @example
     * // Update or create a EventAttendee
     * const eventAttendee = await prisma.eventAttendee.upsert({
     *   create: {
     *     // ... data to create a EventAttendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventAttendee we want to update
     *   }
     * })
     */
    upsert<T extends EventAttendeeUpsertArgs>(args: SelectSubset<T, EventAttendeeUpsertArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeCountArgs} args - Arguments to filter EventAttendees to count.
     * @example
     * // Count the number of EventAttendees
     * const count = await prisma.eventAttendee.count({
     *   where: {
     *     // ... the filter for the EventAttendees we want to count
     *   }
     * })
    **/
    count<T extends EventAttendeeCountArgs>(
      args?: Subset<T, EventAttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventAttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAttendeeAggregateArgs>(args: Subset<T, EventAttendeeAggregateArgs>): Prisma.PrismaPromise<GetEventAttendeeAggregateType<T>>

    /**
     * Group by EventAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeGroupByArgs} args - Group by arguments.
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
      T extends EventAttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventAttendeeGroupByArgs['orderBy'] }
        : { orderBy?: EventAttendeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventAttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventAttendee model
   */
  readonly fields: EventAttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventAttendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventAttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventAttendee model
   */
  interface EventAttendeeFieldRefs {
    readonly userId: FieldRef<"EventAttendee", 'Int'>
    readonly eventId: FieldRef<"EventAttendee", 'Int'>
    readonly createdAt: FieldRef<"EventAttendee", 'DateTime'>
    readonly hasPaid: FieldRef<"EventAttendee", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EventAttendee findUnique
   */
  export type EventAttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee findUniqueOrThrow
   */
  export type EventAttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee findFirst
   */
  export type EventAttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee findFirstOrThrow
   */
  export type EventAttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee findMany
   */
  export type EventAttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendees to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee create
   */
  export type EventAttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventAttendee.
     */
    data: XOR<EventAttendeeCreateInput, EventAttendeeUncheckedCreateInput>
  }

  /**
   * EventAttendee createMany
   */
  export type EventAttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventAttendees.
     */
    data: EventAttendeeCreateManyInput | EventAttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventAttendee createManyAndReturn
   */
  export type EventAttendeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * The data used to create many EventAttendees.
     */
    data: EventAttendeeCreateManyInput | EventAttendeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventAttendee update
   */
  export type EventAttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventAttendee.
     */
    data: XOR<EventAttendeeUpdateInput, EventAttendeeUncheckedUpdateInput>
    /**
     * Choose, which EventAttendee to update.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee updateMany
   */
  export type EventAttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventAttendees.
     */
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyInput>
    /**
     * Filter which EventAttendees to update
     */
    where?: EventAttendeeWhereInput
    /**
     * Limit how many EventAttendees to update.
     */
    limit?: number
  }

  /**
   * EventAttendee updateManyAndReturn
   */
  export type EventAttendeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * The data used to update EventAttendees.
     */
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyInput>
    /**
     * Filter which EventAttendees to update
     */
    where?: EventAttendeeWhereInput
    /**
     * Limit how many EventAttendees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventAttendee upsert
   */
  export type EventAttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventAttendee to update in case it exists.
     */
    where: EventAttendeeWhereUniqueInput
    /**
     * In case the EventAttendee found by the `where` argument doesn't exist, create a new EventAttendee with this data.
     */
    create: XOR<EventAttendeeCreateInput, EventAttendeeUncheckedCreateInput>
    /**
     * In case the EventAttendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventAttendeeUpdateInput, EventAttendeeUncheckedUpdateInput>
  }

  /**
   * EventAttendee delete
   */
  export type EventAttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter which EventAttendee to delete.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee deleteMany
   */
  export type EventAttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAttendees to delete
     */
    where?: EventAttendeeWhereInput
    /**
     * Limit how many EventAttendees to delete.
     */
    limit?: number
  }

  /**
   * EventAttendee without action
   */
  export type EventAttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
  }


  /**
   * Model PaymentIntent
   */

  export type AggregatePaymentIntent = {
    _count: PaymentIntentCountAggregateOutputType | null
    _avg: PaymentIntentAvgAggregateOutputType | null
    _sum: PaymentIntentSumAggregateOutputType | null
    _min: PaymentIntentMinAggregateOutputType | null
    _max: PaymentIntentMaxAggregateOutputType | null
  }

  export type PaymentIntentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    amount: number | null
  }

  export type PaymentIntentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    amount: number | null
  }

  export type PaymentIntentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    status: string | null
    paymentId: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentIntentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    status: string | null
    paymentId: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentIntentCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    status: number
    paymentId: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentIntentAvgAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    amount?: true
  }

  export type PaymentIntentSumAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    amount?: true
  }

  export type PaymentIntentMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    status?: true
    paymentId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentIntentMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    status?: true
    paymentId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentIntentCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    status?: true
    paymentId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentIntentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentIntent to aggregate.
     */
    where?: PaymentIntentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentIntents to fetch.
     */
    orderBy?: PaymentIntentOrderByWithRelationInput | PaymentIntentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentIntentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentIntents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentIntents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentIntents
    **/
    _count?: true | PaymentIntentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentIntentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentIntentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentIntentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentIntentMaxAggregateInputType
  }

  export type GetPaymentIntentAggregateType<T extends PaymentIntentAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentIntent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentIntent[P]>
      : GetScalarType<T[P], AggregatePaymentIntent[P]>
  }




  export type PaymentIntentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentIntentWhereInput
    orderBy?: PaymentIntentOrderByWithAggregationInput | PaymentIntentOrderByWithAggregationInput[]
    by: PaymentIntentScalarFieldEnum[] | PaymentIntentScalarFieldEnum
    having?: PaymentIntentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentIntentCountAggregateInputType | true
    _avg?: PaymentIntentAvgAggregateInputType
    _sum?: PaymentIntentSumAggregateInputType
    _min?: PaymentIntentMinAggregateInputType
    _max?: PaymentIntentMaxAggregateInputType
  }

  export type PaymentIntentGroupByOutputType = {
    id: number
    userId: number
    eventId: number
    status: string
    paymentId: string
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: PaymentIntentCountAggregateOutputType | null
    _avg: PaymentIntentAvgAggregateOutputType | null
    _sum: PaymentIntentSumAggregateOutputType | null
    _min: PaymentIntentMinAggregateOutputType | null
    _max: PaymentIntentMaxAggregateOutputType | null
  }

  type GetPaymentIntentGroupByPayload<T extends PaymentIntentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentIntentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentIntentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentIntentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentIntentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentIntentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    status?: boolean
    paymentId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentIntent"]>

  export type PaymentIntentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    status?: boolean
    paymentId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentIntent"]>

  export type PaymentIntentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    status?: boolean
    paymentId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentIntent"]>

  export type PaymentIntentSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    status?: boolean
    paymentId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentIntentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "status" | "paymentId" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentIntent"]>
  export type PaymentIntentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type PaymentIntentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type PaymentIntentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $PaymentIntentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentIntent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      eventId: number
      status: string
      paymentId: string
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentIntent"]>
    composites: {}
  }

  type PaymentIntentGetPayload<S extends boolean | null | undefined | PaymentIntentDefaultArgs> = $Result.GetResult<Prisma.$PaymentIntentPayload, S>

  type PaymentIntentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentIntentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentIntentCountAggregateInputType | true
    }

  export interface PaymentIntentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentIntent'], meta: { name: 'PaymentIntent' } }
    /**
     * Find zero or one PaymentIntent that matches the filter.
     * @param {PaymentIntentFindUniqueArgs} args - Arguments to find a PaymentIntent
     * @example
     * // Get one PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentIntentFindUniqueArgs>(args: SelectSubset<T, PaymentIntentFindUniqueArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentIntent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentIntentFindUniqueOrThrowArgs} args - Arguments to find a PaymentIntent
     * @example
     * // Get one PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentIntentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentIntentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentIntent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentFindFirstArgs} args - Arguments to find a PaymentIntent
     * @example
     * // Get one PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentIntentFindFirstArgs>(args?: SelectSubset<T, PaymentIntentFindFirstArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentIntent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentFindFirstOrThrowArgs} args - Arguments to find a PaymentIntent
     * @example
     * // Get one PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentIntentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentIntentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentIntents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentIntents
     * const paymentIntents = await prisma.paymentIntent.findMany()
     * 
     * // Get first 10 PaymentIntents
     * const paymentIntents = await prisma.paymentIntent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentIntentWithIdOnly = await prisma.paymentIntent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentIntentFindManyArgs>(args?: SelectSubset<T, PaymentIntentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentIntent.
     * @param {PaymentIntentCreateArgs} args - Arguments to create a PaymentIntent.
     * @example
     * // Create one PaymentIntent
     * const PaymentIntent = await prisma.paymentIntent.create({
     *   data: {
     *     // ... data to create a PaymentIntent
     *   }
     * })
     * 
     */
    create<T extends PaymentIntentCreateArgs>(args: SelectSubset<T, PaymentIntentCreateArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentIntents.
     * @param {PaymentIntentCreateManyArgs} args - Arguments to create many PaymentIntents.
     * @example
     * // Create many PaymentIntents
     * const paymentIntent = await prisma.paymentIntent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentIntentCreateManyArgs>(args?: SelectSubset<T, PaymentIntentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentIntents and returns the data saved in the database.
     * @param {PaymentIntentCreateManyAndReturnArgs} args - Arguments to create many PaymentIntents.
     * @example
     * // Create many PaymentIntents
     * const paymentIntent = await prisma.paymentIntent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentIntents and only return the `id`
     * const paymentIntentWithIdOnly = await prisma.paymentIntent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentIntentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentIntentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentIntent.
     * @param {PaymentIntentDeleteArgs} args - Arguments to delete one PaymentIntent.
     * @example
     * // Delete one PaymentIntent
     * const PaymentIntent = await prisma.paymentIntent.delete({
     *   where: {
     *     // ... filter to delete one PaymentIntent
     *   }
     * })
     * 
     */
    delete<T extends PaymentIntentDeleteArgs>(args: SelectSubset<T, PaymentIntentDeleteArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentIntent.
     * @param {PaymentIntentUpdateArgs} args - Arguments to update one PaymentIntent.
     * @example
     * // Update one PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentIntentUpdateArgs>(args: SelectSubset<T, PaymentIntentUpdateArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentIntents.
     * @param {PaymentIntentDeleteManyArgs} args - Arguments to filter PaymentIntents to delete.
     * @example
     * // Delete a few PaymentIntents
     * const { count } = await prisma.paymentIntent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentIntentDeleteManyArgs>(args?: SelectSubset<T, PaymentIntentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentIntents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentIntents
     * const paymentIntent = await prisma.paymentIntent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentIntentUpdateManyArgs>(args: SelectSubset<T, PaymentIntentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentIntents and returns the data updated in the database.
     * @param {PaymentIntentUpdateManyAndReturnArgs} args - Arguments to update many PaymentIntents.
     * @example
     * // Update many PaymentIntents
     * const paymentIntent = await prisma.paymentIntent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentIntents and only return the `id`
     * const paymentIntentWithIdOnly = await prisma.paymentIntent.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentIntentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentIntentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentIntent.
     * @param {PaymentIntentUpsertArgs} args - Arguments to update or create a PaymentIntent.
     * @example
     * // Update or create a PaymentIntent
     * const paymentIntent = await prisma.paymentIntent.upsert({
     *   create: {
     *     // ... data to create a PaymentIntent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentIntent we want to update
     *   }
     * })
     */
    upsert<T extends PaymentIntentUpsertArgs>(args: SelectSubset<T, PaymentIntentUpsertArgs<ExtArgs>>): Prisma__PaymentIntentClient<$Result.GetResult<Prisma.$PaymentIntentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentIntents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentCountArgs} args - Arguments to filter PaymentIntents to count.
     * @example
     * // Count the number of PaymentIntents
     * const count = await prisma.paymentIntent.count({
     *   where: {
     *     // ... the filter for the PaymentIntents we want to count
     *   }
     * })
    **/
    count<T extends PaymentIntentCountArgs>(
      args?: Subset<T, PaymentIntentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentIntentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentIntent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentIntentAggregateArgs>(args: Subset<T, PaymentIntentAggregateArgs>): Prisma.PrismaPromise<GetPaymentIntentAggregateType<T>>

    /**
     * Group by PaymentIntent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentIntentGroupByArgs} args - Group by arguments.
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
      T extends PaymentIntentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentIntentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentIntentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentIntentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentIntentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentIntent model
   */
  readonly fields: PaymentIntentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentIntent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentIntentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentIntent model
   */
  interface PaymentIntentFieldRefs {
    readonly id: FieldRef<"PaymentIntent", 'Int'>
    readonly userId: FieldRef<"PaymentIntent", 'Int'>
    readonly eventId: FieldRef<"PaymentIntent", 'Int'>
    readonly status: FieldRef<"PaymentIntent", 'String'>
    readonly paymentId: FieldRef<"PaymentIntent", 'String'>
    readonly amount: FieldRef<"PaymentIntent", 'Float'>
    readonly createdAt: FieldRef<"PaymentIntent", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentIntent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentIntent findUnique
   */
  export type PaymentIntentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentIntent to fetch.
     */
    where: PaymentIntentWhereUniqueInput
  }

  /**
   * PaymentIntent findUniqueOrThrow
   */
  export type PaymentIntentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentIntent to fetch.
     */
    where: PaymentIntentWhereUniqueInput
  }

  /**
   * PaymentIntent findFirst
   */
  export type PaymentIntentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentIntent to fetch.
     */
    where?: PaymentIntentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentIntents to fetch.
     */
    orderBy?: PaymentIntentOrderByWithRelationInput | PaymentIntentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentIntents.
     */
    cursor?: PaymentIntentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentIntents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentIntents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentIntents.
     */
    distinct?: PaymentIntentScalarFieldEnum | PaymentIntentScalarFieldEnum[]
  }

  /**
   * PaymentIntent findFirstOrThrow
   */
  export type PaymentIntentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentIntent to fetch.
     */
    where?: PaymentIntentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentIntents to fetch.
     */
    orderBy?: PaymentIntentOrderByWithRelationInput | PaymentIntentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentIntents.
     */
    cursor?: PaymentIntentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentIntents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentIntents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentIntents.
     */
    distinct?: PaymentIntentScalarFieldEnum | PaymentIntentScalarFieldEnum[]
  }

  /**
   * PaymentIntent findMany
   */
  export type PaymentIntentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter, which PaymentIntents to fetch.
     */
    where?: PaymentIntentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentIntents to fetch.
     */
    orderBy?: PaymentIntentOrderByWithRelationInput | PaymentIntentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentIntents.
     */
    cursor?: PaymentIntentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentIntents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentIntents.
     */
    skip?: number
    distinct?: PaymentIntentScalarFieldEnum | PaymentIntentScalarFieldEnum[]
  }

  /**
   * PaymentIntent create
   */
  export type PaymentIntentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentIntent.
     */
    data: XOR<PaymentIntentCreateInput, PaymentIntentUncheckedCreateInput>
  }

  /**
   * PaymentIntent createMany
   */
  export type PaymentIntentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentIntents.
     */
    data: PaymentIntentCreateManyInput | PaymentIntentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentIntent createManyAndReturn
   */
  export type PaymentIntentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentIntents.
     */
    data: PaymentIntentCreateManyInput | PaymentIntentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentIntent update
   */
  export type PaymentIntentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentIntent.
     */
    data: XOR<PaymentIntentUpdateInput, PaymentIntentUncheckedUpdateInput>
    /**
     * Choose, which PaymentIntent to update.
     */
    where: PaymentIntentWhereUniqueInput
  }

  /**
   * PaymentIntent updateMany
   */
  export type PaymentIntentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentIntents.
     */
    data: XOR<PaymentIntentUpdateManyMutationInput, PaymentIntentUncheckedUpdateManyInput>
    /**
     * Filter which PaymentIntents to update
     */
    where?: PaymentIntentWhereInput
    /**
     * Limit how many PaymentIntents to update.
     */
    limit?: number
  }

  /**
   * PaymentIntent updateManyAndReturn
   */
  export type PaymentIntentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * The data used to update PaymentIntents.
     */
    data: XOR<PaymentIntentUpdateManyMutationInput, PaymentIntentUncheckedUpdateManyInput>
    /**
     * Filter which PaymentIntents to update
     */
    where?: PaymentIntentWhereInput
    /**
     * Limit how many PaymentIntents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentIntent upsert
   */
  export type PaymentIntentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentIntent to update in case it exists.
     */
    where: PaymentIntentWhereUniqueInput
    /**
     * In case the PaymentIntent found by the `where` argument doesn't exist, create a new PaymentIntent with this data.
     */
    create: XOR<PaymentIntentCreateInput, PaymentIntentUncheckedCreateInput>
    /**
     * In case the PaymentIntent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentIntentUpdateInput, PaymentIntentUncheckedUpdateInput>
  }

  /**
   * PaymentIntent delete
   */
  export type PaymentIntentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
    /**
     * Filter which PaymentIntent to delete.
     */
    where: PaymentIntentWhereUniqueInput
  }

  /**
   * PaymentIntent deleteMany
   */
  export type PaymentIntentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentIntents to delete
     */
    where?: PaymentIntentWhereInput
    /**
     * Limit how many PaymentIntents to delete.
     */
    limit?: number
  }

  /**
   * PaymentIntent without action
   */
  export type PaymentIntentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentIntent
     */
    select?: PaymentIntentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentIntent
     */
    omit?: PaymentIntentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIntentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    price: 'price'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventAttendeeScalarFieldEnum: {
    userId: 'userId',
    eventId: 'eventId',
    createdAt: 'createdAt',
    hasPaid: 'hasPaid'
  };

  export type EventAttendeeScalarFieldEnum = (typeof EventAttendeeScalarFieldEnum)[keyof typeof EventAttendeeScalarFieldEnum]


  export const PaymentIntentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    status: 'status',
    paymentId: 'paymentId',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentIntentScalarFieldEnum = (typeof PaymentIntentScalarFieldEnum)[keyof typeof PaymentIntentScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    events?: EventListRelationFilter
    attending?: EventAttendeeListRelationFilter
    paymentIntents?: PaymentIntentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    events?: EventOrderByRelationAggregateInput
    attending?: EventAttendeeOrderByRelationAggregateInput
    paymentIntents?: PaymentIntentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    events?: EventListRelationFilter
    attending?: EventAttendeeListRelationFilter
    paymentIntents?: PaymentIntentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    userId?: IntNullableFilter<"Event"> | number | null
    price?: FloatNullableFilter<"Event"> | number | null
    attendees?: EventAttendeeListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    paymentIntents?: PaymentIntentListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    attendees?: EventAttendeeOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    paymentIntents?: PaymentIntentOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    userId?: IntNullableFilter<"Event"> | number | null
    price?: FloatNullableFilter<"Event"> | number | null
    attendees?: EventAttendeeListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    paymentIntents?: PaymentIntentListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Event"> | number | null
    price?: FloatNullableWithAggregatesFilter<"Event"> | number | null
  }

  export type EventAttendeeWhereInput = {
    AND?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    OR?: EventAttendeeWhereInput[]
    NOT?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    userId?: IntFilter<"EventAttendee"> | number
    eventId?: IntFilter<"EventAttendee"> | number
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    hasPaid?: BoolFilter<"EventAttendee"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventAttendeeOrderByWithRelationInput = {
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    hasPaid?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type EventAttendeeWhereUniqueInput = Prisma.AtLeast<{
    userId_eventId?: EventAttendeeUserIdEventIdCompoundUniqueInput
    AND?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    OR?: EventAttendeeWhereInput[]
    NOT?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    userId?: IntFilter<"EventAttendee"> | number
    eventId?: IntFilter<"EventAttendee"> | number
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    hasPaid?: BoolFilter<"EventAttendee"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "userId_eventId">

  export type EventAttendeeOrderByWithAggregationInput = {
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    hasPaid?: SortOrder
    _count?: EventAttendeeCountOrderByAggregateInput
    _avg?: EventAttendeeAvgOrderByAggregateInput
    _max?: EventAttendeeMaxOrderByAggregateInput
    _min?: EventAttendeeMinOrderByAggregateInput
    _sum?: EventAttendeeSumOrderByAggregateInput
  }

  export type EventAttendeeScalarWhereWithAggregatesInput = {
    AND?: EventAttendeeScalarWhereWithAggregatesInput | EventAttendeeScalarWhereWithAggregatesInput[]
    OR?: EventAttendeeScalarWhereWithAggregatesInput[]
    NOT?: EventAttendeeScalarWhereWithAggregatesInput | EventAttendeeScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"EventAttendee"> | number
    eventId?: IntWithAggregatesFilter<"EventAttendee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EventAttendee"> | Date | string
    hasPaid?: BoolWithAggregatesFilter<"EventAttendee"> | boolean
  }

  export type PaymentIntentWhereInput = {
    AND?: PaymentIntentWhereInput | PaymentIntentWhereInput[]
    OR?: PaymentIntentWhereInput[]
    NOT?: PaymentIntentWhereInput | PaymentIntentWhereInput[]
    id?: IntFilter<"PaymentIntent"> | number
    userId?: IntFilter<"PaymentIntent"> | number
    eventId?: IntFilter<"PaymentIntent"> | number
    status?: StringFilter<"PaymentIntent"> | string
    paymentId?: StringFilter<"PaymentIntent"> | string
    amount?: FloatFilter<"PaymentIntent"> | number
    createdAt?: DateTimeFilter<"PaymentIntent"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentIntent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type PaymentIntentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type PaymentIntentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentIntentWhereInput | PaymentIntentWhereInput[]
    OR?: PaymentIntentWhereInput[]
    NOT?: PaymentIntentWhereInput | PaymentIntentWhereInput[]
    userId?: IntFilter<"PaymentIntent"> | number
    eventId?: IntFilter<"PaymentIntent"> | number
    status?: StringFilter<"PaymentIntent"> | string
    paymentId?: StringFilter<"PaymentIntent"> | string
    amount?: FloatFilter<"PaymentIntent"> | number
    createdAt?: DateTimeFilter<"PaymentIntent"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentIntent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type PaymentIntentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentIntentCountOrderByAggregateInput
    _avg?: PaymentIntentAvgOrderByAggregateInput
    _max?: PaymentIntentMaxOrderByAggregateInput
    _min?: PaymentIntentMinOrderByAggregateInput
    _sum?: PaymentIntentSumOrderByAggregateInput
  }

  export type PaymentIntentScalarWhereWithAggregatesInput = {
    AND?: PaymentIntentScalarWhereWithAggregatesInput | PaymentIntentScalarWhereWithAggregatesInput[]
    OR?: PaymentIntentScalarWhereWithAggregatesInput[]
    NOT?: PaymentIntentScalarWhereWithAggregatesInput | PaymentIntentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentIntent"> | number
    userId?: IntWithAggregatesFilter<"PaymentIntent"> | number
    eventId?: IntWithAggregatesFilter<"PaymentIntent"> | number
    status?: StringWithAggregatesFilter<"PaymentIntent"> | string
    paymentId?: StringWithAggregatesFilter<"PaymentIntent"> | string
    amount?: FloatWithAggregatesFilter<"PaymentIntent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PaymentIntent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentIntent"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    events?: EventCreateNestedManyWithoutUserInput
    attending?: EventAttendeeCreateNestedManyWithoutUserInput
    paymentIntents?: PaymentIntentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    attending?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    paymentIntents?: PaymentIntentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUpdateManyWithoutUserNestedInput
    attending?: EventAttendeeUpdateManyWithoutUserNestedInput
    paymentIntents?: PaymentIntentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    attending?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    paymentIntents?: PaymentIntentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    price?: number | null
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
    user?: UserCreateNestedOneWithoutEventsInput
    paymentIntents?: PaymentIntentCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    price?: number | null
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    paymentIntents?: PaymentIntentUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
    user?: UserUpdateOneWithoutEventsNestedInput
    paymentIntents?: PaymentIntentUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    paymentIntents?: PaymentIntentUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    price?: number | null
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EventAttendeeCreateInput = {
    createdAt?: Date | string
    hasPaid?: boolean
    user: UserCreateNestedOneWithoutAttendingInput
    event: EventCreateNestedOneWithoutAttendeesInput
  }

  export type EventAttendeeUncheckedCreateInput = {
    userId: number
    eventId: number
    createdAt?: Date | string
    hasPaid?: boolean
  }

  export type EventAttendeeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasPaid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAttendingNestedInput
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type EventAttendeeUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventAttendeeCreateManyInput = {
    userId: number
    eventId: number
    createdAt?: Date | string
    hasPaid?: boolean
  }

  export type EventAttendeeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventAttendeeUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentIntentCreateInput = {
    status: string
    paymentId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentIntentsInput
    event: EventCreateNestedOneWithoutPaymentIntentsInput
  }

  export type PaymentIntentUncheckedCreateInput = {
    id?: number
    userId: number
    eventId: number
    status: string
    paymentId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentIntentUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentIntentsNestedInput
    event?: EventUpdateOneRequiredWithoutPaymentIntentsNestedInput
  }

  export type PaymentIntentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentIntentCreateManyInput = {
    id?: number
    userId: number
    eventId: number
    status: string
    paymentId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentIntentUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentIntentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventAttendeeListRelationFilter = {
    every?: EventAttendeeWhereInput
    some?: EventAttendeeWhereInput
    none?: EventAttendeeWhereInput
  }

  export type PaymentIntentListRelationFilter = {
    every?: PaymentIntentWhereInput
    some?: PaymentIntentWhereInput
    none?: PaymentIntentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventAttendeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentIntentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventAttendeeUserIdEventIdCompoundUniqueInput = {
    userId: number
    eventId: number
  }

  export type EventAttendeeCountOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    hasPaid?: SortOrder
  }

  export type EventAttendeeAvgOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type EventAttendeeMaxOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    hasPaid?: SortOrder
  }

  export type EventAttendeeMinOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    hasPaid?: SortOrder
  }

  export type EventAttendeeSumOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PaymentIntentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentIntentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentIntentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentIntentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentIntentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventAttendeeCreateNestedManyWithoutUserInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type PaymentIntentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentIntentCreateWithoutUserInput, PaymentIntentUncheckedCreateWithoutUserInput> | PaymentIntentCreateWithoutUserInput[] | PaymentIntentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentIntentCreateOrConnectWithoutUserInput | PaymentIntentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentIntentCreateManyUserInputEnvelope
    connect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventAttendeeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type PaymentIntentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentIntentCreateWithoutUserInput, PaymentIntentUncheckedCreateWithoutUserInput> | PaymentIntentCreateWithoutUserInput[] | PaymentIntentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentIntentCreateOrConnectWithoutUserInput | PaymentIntentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentIntentCreateManyUserInputEnvelope
    connect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventAttendeeUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutUserInput | EventAttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutUserInput | EventAttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutUserInput | EventAttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type PaymentIntentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentIntentCreateWithoutUserInput, PaymentIntentUncheckedCreateWithoutUserInput> | PaymentIntentCreateWithoutUserInput[] | PaymentIntentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentIntentCreateOrConnectWithoutUserInput | PaymentIntentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentIntentUpsertWithWhereUniqueWithoutUserInput | PaymentIntentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentIntentCreateManyUserInputEnvelope
    set?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    disconnect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    delete?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    connect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    update?: PaymentIntentUpdateWithWhereUniqueWithoutUserInput | PaymentIntentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentIntentUpdateManyWithWhereWithoutUserInput | PaymentIntentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentIntentScalarWhereInput | PaymentIntentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventAttendeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutUserInput | EventAttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutUserInput | EventAttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutUserInput | EventAttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type PaymentIntentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentIntentCreateWithoutUserInput, PaymentIntentUncheckedCreateWithoutUserInput> | PaymentIntentCreateWithoutUserInput[] | PaymentIntentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentIntentCreateOrConnectWithoutUserInput | PaymentIntentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentIntentUpsertWithWhereUniqueWithoutUserInput | PaymentIntentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentIntentCreateManyUserInputEnvelope
    set?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    disconnect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    delete?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    connect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    update?: PaymentIntentUpdateWithWhereUniqueWithoutUserInput | PaymentIntentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentIntentUpdateManyWithWhereWithoutUserInput | PaymentIntentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentIntentScalarWhereInput | PaymentIntentScalarWhereInput[]
  }

  export type EventAttendeeCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentIntentCreateNestedManyWithoutEventInput = {
    create?: XOR<PaymentIntentCreateWithoutEventInput, PaymentIntentUncheckedCreateWithoutEventInput> | PaymentIntentCreateWithoutEventInput[] | PaymentIntentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PaymentIntentCreateOrConnectWithoutEventInput | PaymentIntentCreateOrConnectWithoutEventInput[]
    createMany?: PaymentIntentCreateManyEventInputEnvelope
    connect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
  }

  export type EventAttendeeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type PaymentIntentUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<PaymentIntentCreateWithoutEventInput, PaymentIntentUncheckedCreateWithoutEventInput> | PaymentIntentCreateWithoutEventInput[] | PaymentIntentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PaymentIntentCreateOrConnectWithoutEventInput | PaymentIntentCreateOrConnectWithoutEventInput[]
    createMany?: PaymentIntentCreateManyEventInputEnvelope
    connect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventAttendeeUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutEventInput | EventAttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutEventInput | EventAttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutEventInput | EventAttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type UserUpdateOneWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type PaymentIntentUpdateManyWithoutEventNestedInput = {
    create?: XOR<PaymentIntentCreateWithoutEventInput, PaymentIntentUncheckedCreateWithoutEventInput> | PaymentIntentCreateWithoutEventInput[] | PaymentIntentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PaymentIntentCreateOrConnectWithoutEventInput | PaymentIntentCreateOrConnectWithoutEventInput[]
    upsert?: PaymentIntentUpsertWithWhereUniqueWithoutEventInput | PaymentIntentUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PaymentIntentCreateManyEventInputEnvelope
    set?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    disconnect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    delete?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    connect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    update?: PaymentIntentUpdateWithWhereUniqueWithoutEventInput | PaymentIntentUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PaymentIntentUpdateManyWithWhereWithoutEventInput | PaymentIntentUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PaymentIntentScalarWhereInput | PaymentIntentScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventAttendeeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutEventInput | EventAttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutEventInput | EventAttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutEventInput | EventAttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type PaymentIntentUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<PaymentIntentCreateWithoutEventInput, PaymentIntentUncheckedCreateWithoutEventInput> | PaymentIntentCreateWithoutEventInput[] | PaymentIntentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PaymentIntentCreateOrConnectWithoutEventInput | PaymentIntentCreateOrConnectWithoutEventInput[]
    upsert?: PaymentIntentUpsertWithWhereUniqueWithoutEventInput | PaymentIntentUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PaymentIntentCreateManyEventInputEnvelope
    set?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    disconnect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    delete?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    connect?: PaymentIntentWhereUniqueInput | PaymentIntentWhereUniqueInput[]
    update?: PaymentIntentUpdateWithWhereUniqueWithoutEventInput | PaymentIntentUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PaymentIntentUpdateManyWithWhereWithoutEventInput | PaymentIntentUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PaymentIntentScalarWhereInput | PaymentIntentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAttendingInput = {
    create?: XOR<UserCreateWithoutAttendingInput, UserUncheckedCreateWithoutAttendingInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendingInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput
    connect?: EventWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAttendingNestedInput = {
    create?: XOR<UserCreateWithoutAttendingInput, UserUncheckedCreateWithoutAttendingInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendingInput
    upsert?: UserUpsertWithoutAttendingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendingInput, UserUpdateWithoutAttendingInput>, UserUncheckedUpdateWithoutAttendingInput>
  }

  export type EventUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput
    upsert?: EventUpsertWithoutAttendeesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutAttendeesInput, EventUpdateWithoutAttendeesInput>, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type UserCreateNestedOneWithoutPaymentIntentsInput = {
    create?: XOR<UserCreateWithoutPaymentIntentsInput, UserUncheckedCreateWithoutPaymentIntentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentIntentsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutPaymentIntentsInput = {
    create?: XOR<EventCreateWithoutPaymentIntentsInput, EventUncheckedCreateWithoutPaymentIntentsInput>
    connectOrCreate?: EventCreateOrConnectWithoutPaymentIntentsInput
    connect?: EventWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPaymentIntentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentIntentsInput, UserUncheckedCreateWithoutPaymentIntentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentIntentsInput
    upsert?: UserUpsertWithoutPaymentIntentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentIntentsInput, UserUpdateWithoutPaymentIntentsInput>, UserUncheckedUpdateWithoutPaymentIntentsInput>
  }

  export type EventUpdateOneRequiredWithoutPaymentIntentsNestedInput = {
    create?: XOR<EventCreateWithoutPaymentIntentsInput, EventUncheckedCreateWithoutPaymentIntentsInput>
    connectOrCreate?: EventCreateOrConnectWithoutPaymentIntentsInput
    upsert?: EventUpsertWithoutPaymentIntentsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutPaymentIntentsInput, EventUpdateWithoutPaymentIntentsInput>, EventUncheckedUpdateWithoutPaymentIntentsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EventCreateWithoutUserInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    price?: number | null
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
    paymentIntents?: PaymentIntentCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    price?: number | null
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    paymentIntents?: PaymentIntentUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventCreateManyUserInputEnvelope = {
    data: EventCreateManyUserInput | EventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventAttendeeCreateWithoutUserInput = {
    createdAt?: Date | string
    hasPaid?: boolean
    event: EventCreateNestedOneWithoutAttendeesInput
  }

  export type EventAttendeeUncheckedCreateWithoutUserInput = {
    eventId: number
    createdAt?: Date | string
    hasPaid?: boolean
  }

  export type EventAttendeeCreateOrConnectWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    create: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput>
  }

  export type EventAttendeeCreateManyUserInputEnvelope = {
    data: EventAttendeeCreateManyUserInput | EventAttendeeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentIntentCreateWithoutUserInput = {
    status: string
    paymentId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutPaymentIntentsInput
  }

  export type PaymentIntentUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
    status: string
    paymentId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentIntentCreateOrConnectWithoutUserInput = {
    where: PaymentIntentWhereUniqueInput
    create: XOR<PaymentIntentCreateWithoutUserInput, PaymentIntentUncheckedCreateWithoutUserInput>
  }

  export type PaymentIntentCreateManyUserInputEnvelope = {
    data: PaymentIntentCreateManyUserInput | PaymentIntentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    userId?: IntNullableFilter<"Event"> | number | null
    price?: FloatNullableFilter<"Event"> | number | null
  }

  export type EventAttendeeUpsertWithWhereUniqueWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    update: XOR<EventAttendeeUpdateWithoutUserInput, EventAttendeeUncheckedUpdateWithoutUserInput>
    create: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput>
  }

  export type EventAttendeeUpdateWithWhereUniqueWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    data: XOR<EventAttendeeUpdateWithoutUserInput, EventAttendeeUncheckedUpdateWithoutUserInput>
  }

  export type EventAttendeeUpdateManyWithWhereWithoutUserInput = {
    where: EventAttendeeScalarWhereInput
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyWithoutUserInput>
  }

  export type EventAttendeeScalarWhereInput = {
    AND?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
    OR?: EventAttendeeScalarWhereInput[]
    NOT?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
    userId?: IntFilter<"EventAttendee"> | number
    eventId?: IntFilter<"EventAttendee"> | number
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    hasPaid?: BoolFilter<"EventAttendee"> | boolean
  }

  export type PaymentIntentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentIntentWhereUniqueInput
    update: XOR<PaymentIntentUpdateWithoutUserInput, PaymentIntentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentIntentCreateWithoutUserInput, PaymentIntentUncheckedCreateWithoutUserInput>
  }

  export type PaymentIntentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentIntentWhereUniqueInput
    data: XOR<PaymentIntentUpdateWithoutUserInput, PaymentIntentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentIntentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentIntentScalarWhereInput
    data: XOR<PaymentIntentUpdateManyMutationInput, PaymentIntentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentIntentScalarWhereInput = {
    AND?: PaymentIntentScalarWhereInput | PaymentIntentScalarWhereInput[]
    OR?: PaymentIntentScalarWhereInput[]
    NOT?: PaymentIntentScalarWhereInput | PaymentIntentScalarWhereInput[]
    id?: IntFilter<"PaymentIntent"> | number
    userId?: IntFilter<"PaymentIntent"> | number
    eventId?: IntFilter<"PaymentIntent"> | number
    status?: StringFilter<"PaymentIntent"> | string
    paymentId?: StringFilter<"PaymentIntent"> | string
    amount?: FloatFilter<"PaymentIntent"> | number
    createdAt?: DateTimeFilter<"PaymentIntent"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentIntent"> | Date | string
  }

  export type EventAttendeeCreateWithoutEventInput = {
    createdAt?: Date | string
    hasPaid?: boolean
    user: UserCreateNestedOneWithoutAttendingInput
  }

  export type EventAttendeeUncheckedCreateWithoutEventInput = {
    userId: number
    createdAt?: Date | string
    hasPaid?: boolean
  }

  export type EventAttendeeCreateOrConnectWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    create: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeCreateManyEventInputEnvelope = {
    data: EventAttendeeCreateManyEventInput | EventAttendeeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutEventsInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    attending?: EventAttendeeCreateNestedManyWithoutUserInput
    paymentIntents?: PaymentIntentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    attending?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    paymentIntents?: PaymentIntentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type PaymentIntentCreateWithoutEventInput = {
    status: string
    paymentId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentIntentsInput
  }

  export type PaymentIntentUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
    status: string
    paymentId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentIntentCreateOrConnectWithoutEventInput = {
    where: PaymentIntentWhereUniqueInput
    create: XOR<PaymentIntentCreateWithoutEventInput, PaymentIntentUncheckedCreateWithoutEventInput>
  }

  export type PaymentIntentCreateManyEventInputEnvelope = {
    data: PaymentIntentCreateManyEventInput | PaymentIntentCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventAttendeeUpsertWithWhereUniqueWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    update: XOR<EventAttendeeUpdateWithoutEventInput, EventAttendeeUncheckedUpdateWithoutEventInput>
    create: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeUpdateWithWhereUniqueWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    data: XOR<EventAttendeeUpdateWithoutEventInput, EventAttendeeUncheckedUpdateWithoutEventInput>
  }

  export type EventAttendeeUpdateManyWithWhereWithoutEventInput = {
    where: EventAttendeeScalarWhereInput
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyWithoutEventInput>
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attending?: EventAttendeeUpdateManyWithoutUserNestedInput
    paymentIntents?: PaymentIntentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attending?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    paymentIntents?: PaymentIntentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentIntentUpsertWithWhereUniqueWithoutEventInput = {
    where: PaymentIntentWhereUniqueInput
    update: XOR<PaymentIntentUpdateWithoutEventInput, PaymentIntentUncheckedUpdateWithoutEventInput>
    create: XOR<PaymentIntentCreateWithoutEventInput, PaymentIntentUncheckedCreateWithoutEventInput>
  }

  export type PaymentIntentUpdateWithWhereUniqueWithoutEventInput = {
    where: PaymentIntentWhereUniqueInput
    data: XOR<PaymentIntentUpdateWithoutEventInput, PaymentIntentUncheckedUpdateWithoutEventInput>
  }

  export type PaymentIntentUpdateManyWithWhereWithoutEventInput = {
    where: PaymentIntentScalarWhereInput
    data: XOR<PaymentIntentUpdateManyMutationInput, PaymentIntentUncheckedUpdateManyWithoutEventInput>
  }

  export type UserCreateWithoutAttendingInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    events?: EventCreateNestedManyWithoutUserInput
    paymentIntents?: PaymentIntentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendingInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    paymentIntents?: PaymentIntentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendingInput, UserUncheckedCreateWithoutAttendingInput>
  }

  export type EventCreateWithoutAttendeesInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    price?: number | null
    user?: UserCreateNestedOneWithoutEventsInput
    paymentIntents?: PaymentIntentCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutAttendeesInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    price?: number | null
    paymentIntents?: PaymentIntentUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutAttendeesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
  }

  export type UserUpsertWithoutAttendingInput = {
    update: XOR<UserUpdateWithoutAttendingInput, UserUncheckedUpdateWithoutAttendingInput>
    create: XOR<UserCreateWithoutAttendingInput, UserUncheckedCreateWithoutAttendingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendingInput, UserUncheckedUpdateWithoutAttendingInput>
  }

  export type UserUpdateWithoutAttendingInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUpdateManyWithoutUserNestedInput
    paymentIntents?: PaymentIntentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendingInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    paymentIntents?: PaymentIntentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutAttendeesInput = {
    update: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type EventUpdateWithoutAttendeesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneWithoutEventsNestedInput
    paymentIntents?: PaymentIntentUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutAttendeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentIntents?: PaymentIntentUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutPaymentIntentsInput = {
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    events?: EventCreateNestedManyWithoutUserInput
    attending?: EventAttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentIntentsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    attending?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentIntentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentIntentsInput, UserUncheckedCreateWithoutPaymentIntentsInput>
  }

  export type EventCreateWithoutPaymentIntentsInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    price?: number | null
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
    user?: UserCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutPaymentIntentsInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    price?: number | null
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPaymentIntentsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPaymentIntentsInput, EventUncheckedCreateWithoutPaymentIntentsInput>
  }

  export type UserUpsertWithoutPaymentIntentsInput = {
    update: XOR<UserUpdateWithoutPaymentIntentsInput, UserUncheckedUpdateWithoutPaymentIntentsInput>
    create: XOR<UserCreateWithoutPaymentIntentsInput, UserUncheckedCreateWithoutPaymentIntentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentIntentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentIntentsInput, UserUncheckedUpdateWithoutPaymentIntentsInput>
  }

  export type UserUpdateWithoutPaymentIntentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUpdateManyWithoutUserNestedInput
    attending?: EventAttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentIntentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    attending?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutPaymentIntentsInput = {
    update: XOR<EventUpdateWithoutPaymentIntentsInput, EventUncheckedUpdateWithoutPaymentIntentsInput>
    create: XOR<EventCreateWithoutPaymentIntentsInput, EventUncheckedCreateWithoutPaymentIntentsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutPaymentIntentsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutPaymentIntentsInput, EventUncheckedUpdateWithoutPaymentIntentsInput>
  }

  export type EventUpdateWithoutPaymentIntentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
    user?: UserUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutPaymentIntentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyUserInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    price?: number | null
  }

  export type EventAttendeeCreateManyUserInput = {
    eventId: number
    createdAt?: Date | string
    hasPaid?: boolean
  }

  export type PaymentIntentCreateManyUserInput = {
    id?: number
    eventId: number
    status: string
    paymentId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
    paymentIntents?: PaymentIntentUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    paymentIntents?: PaymentIntentUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EventAttendeeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasPaid?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type EventAttendeeUncheckedUpdateWithoutUserInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventAttendeeUncheckedUpdateManyWithoutUserInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentIntentUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutPaymentIntentsNestedInput
  }

  export type PaymentIntentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentIntentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeCreateManyEventInput = {
    userId: number
    createdAt?: Date | string
    hasPaid?: boolean
  }

  export type PaymentIntentCreateManyEventInput = {
    id?: number
    userId: number
    status: string
    paymentId: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeUpdateWithoutEventInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasPaid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAttendingNestedInput
  }

  export type EventAttendeeUncheckedUpdateWithoutEventInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventAttendeeUncheckedUpdateManyWithoutEventInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hasPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentIntentUpdateWithoutEventInput = {
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentIntentsNestedInput
  }

  export type PaymentIntentUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentIntentUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
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