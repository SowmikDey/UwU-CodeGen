
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model chatmessage
 * 
 */
export type chatmessage = $Result.DefaultSelection<Prisma.$chatmessagePayload>

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatmessage`: Exposes CRUD operations for the **chatmessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatmessages
    * const chatmessages = await prisma.chatmessage.findMany()
    * ```
    */
  get chatmessage(): Prisma.chatmessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    user: 'user',
    chatmessage: 'chatmessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "chatmessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      chatmessage: {
        payload: Prisma.$chatmessagePayload<ExtArgs>
        fields: Prisma.chatmessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatmessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatmessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload>
          }
          findFirst: {
            args: Prisma.chatmessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatmessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload>
          }
          findMany: {
            args: Prisma.chatmessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload>[]
          }
          create: {
            args: Prisma.chatmessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload>
          }
          createMany: {
            args: Prisma.chatmessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatmessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload>[]
          }
          delete: {
            args: Prisma.chatmessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload>
          }
          update: {
            args: Prisma.chatmessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload>
          }
          deleteMany: {
            args: Prisma.chatmessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatmessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatmessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload>[]
          }
          upsert: {
            args: Prisma.chatmessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatmessagePayload>
          }
          aggregate: {
            args: Prisma.ChatmessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatmessage>
          }
          groupBy: {
            args: Prisma.chatmessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatmessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatmessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatmessageCountAggregateOutputType> | number
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
    user?: userOmit
    chatmessage?: chatmessageOmit
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
    chatmessage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatmessage?: boolean | UserCountOutputTypeCountChatmessageArgs
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
  export type UserCountOutputTypeCountChatmessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatmessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
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
    fname: string | null
    mname: string | null
    lname: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fname: string | null
    mname: string | null
    lname: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fname: number
    mname: number
    lname: number
    email: number
    password: number
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
    fname?: true
    mname?: true
    lname?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fname?: true
    mname?: true
    lname?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fname?: true
    mname?: true
    lname?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
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
    fname: string
    mname: string | null
    lname: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    mname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
    chatmessage?: boolean | user$chatmessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    mname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    mname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    fname?: boolean
    mname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fname" | "mname" | "lname" | "email" | "password", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatmessage?: boolean | user$chatmessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      chatmessage: Prisma.$chatmessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fname: string
      mname: string | null
      lname: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatmessage<T extends user$chatmessageArgs<ExtArgs> = {}>(args?: Subset<T, user$chatmessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly fname: FieldRef<"user", 'String'>
    readonly mname: FieldRef<"user", 'String'>
    readonly lname: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.chatmessage
   */
  export type user$chatmessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
    where?: chatmessageWhereInput
    orderBy?: chatmessageOrderByWithRelationInput | chatmessageOrderByWithRelationInput[]
    cursor?: chatmessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatmessageScalarFieldEnum | ChatmessageScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model chatmessage
   */

  export type AggregateChatmessage = {
    _count: ChatmessageCountAggregateOutputType | null
    _avg: ChatmessageAvgAggregateOutputType | null
    _sum: ChatmessageSumAggregateOutputType | null
    _min: ChatmessageMinAggregateOutputType | null
    _max: ChatmessageMaxAggregateOutputType | null
  }

  export type ChatmessageAvgAggregateOutputType = {
    userId: number | null
  }

  export type ChatmessageSumAggregateOutputType = {
    userId: number | null
  }

  export type ChatmessageMinAggregateOutputType = {
    id: string | null
    userId: number | null
    input: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatmessageMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    input: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatmessageCountAggregateOutputType = {
    id: number
    userId: number
    input: number
    content: number
    createdAt: number
    _all: number
  }


  export type ChatmessageAvgAggregateInputType = {
    userId?: true
  }

  export type ChatmessageSumAggregateInputType = {
    userId?: true
  }

  export type ChatmessageMinAggregateInputType = {
    id?: true
    userId?: true
    input?: true
    content?: true
    createdAt?: true
  }

  export type ChatmessageMaxAggregateInputType = {
    id?: true
    userId?: true
    input?: true
    content?: true
    createdAt?: true
  }

  export type ChatmessageCountAggregateInputType = {
    id?: true
    userId?: true
    input?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ChatmessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatmessage to aggregate.
     */
    where?: chatmessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatmessages to fetch.
     */
    orderBy?: chatmessageOrderByWithRelationInput | chatmessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatmessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatmessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatmessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatmessages
    **/
    _count?: true | ChatmessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatmessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatmessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatmessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatmessageMaxAggregateInputType
  }

  export type GetChatmessageAggregateType<T extends ChatmessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatmessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatmessage[P]>
      : GetScalarType<T[P], AggregateChatmessage[P]>
  }




  export type chatmessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatmessageWhereInput
    orderBy?: chatmessageOrderByWithAggregationInput | chatmessageOrderByWithAggregationInput[]
    by: ChatmessageScalarFieldEnum[] | ChatmessageScalarFieldEnum
    having?: chatmessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatmessageCountAggregateInputType | true
    _avg?: ChatmessageAvgAggregateInputType
    _sum?: ChatmessageSumAggregateInputType
    _min?: ChatmessageMinAggregateInputType
    _max?: ChatmessageMaxAggregateInputType
  }

  export type ChatmessageGroupByOutputType = {
    id: string
    userId: number
    input: string
    content: string
    createdAt: Date
    _count: ChatmessageCountAggregateOutputType | null
    _avg: ChatmessageAvgAggregateOutputType | null
    _sum: ChatmessageSumAggregateOutputType | null
    _min: ChatmessageMinAggregateOutputType | null
    _max: ChatmessageMaxAggregateOutputType | null
  }

  type GetChatmessageGroupByPayload<T extends chatmessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatmessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatmessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatmessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatmessageGroupByOutputType[P]>
        }
      >
    >


  export type chatmessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    input?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatmessage"]>

  export type chatmessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    input?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatmessage"]>

  export type chatmessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    input?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatmessage"]>

  export type chatmessageSelectScalar = {
    id?: boolean
    userId?: boolean
    input?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type chatmessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "input" | "content" | "createdAt", ExtArgs["result"]["chatmessage"]>
  export type chatmessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type chatmessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type chatmessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $chatmessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatmessage"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      input: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["chatmessage"]>
    composites: {}
  }

  type chatmessageGetPayload<S extends boolean | null | undefined | chatmessageDefaultArgs> = $Result.GetResult<Prisma.$chatmessagePayload, S>

  type chatmessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatmessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatmessageCountAggregateInputType | true
    }

  export interface chatmessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatmessage'], meta: { name: 'chatmessage' } }
    /**
     * Find zero or one Chatmessage that matches the filter.
     * @param {chatmessageFindUniqueArgs} args - Arguments to find a Chatmessage
     * @example
     * // Get one Chatmessage
     * const chatmessage = await prisma.chatmessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatmessageFindUniqueArgs>(args: SelectSubset<T, chatmessageFindUniqueArgs<ExtArgs>>): Prisma__chatmessageClient<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Chatmessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatmessageFindUniqueOrThrowArgs} args - Arguments to find a Chatmessage
     * @example
     * // Get one Chatmessage
     * const chatmessage = await prisma.chatmessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatmessageFindUniqueOrThrowArgs>(args: SelectSubset<T, chatmessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatmessageClient<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Chatmessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessageFindFirstArgs} args - Arguments to find a Chatmessage
     * @example
     * // Get one Chatmessage
     * const chatmessage = await prisma.chatmessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatmessageFindFirstArgs>(args?: SelectSubset<T, chatmessageFindFirstArgs<ExtArgs>>): Prisma__chatmessageClient<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Chatmessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessageFindFirstOrThrowArgs} args - Arguments to find a Chatmessage
     * @example
     * // Get one Chatmessage
     * const chatmessage = await prisma.chatmessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatmessageFindFirstOrThrowArgs>(args?: SelectSubset<T, chatmessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatmessageClient<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Chatmessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatmessages
     * const chatmessages = await prisma.chatmessage.findMany()
     * 
     * // Get first 10 Chatmessages
     * const chatmessages = await prisma.chatmessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatmessageWithIdOnly = await prisma.chatmessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatmessageFindManyArgs>(args?: SelectSubset<T, chatmessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Chatmessage.
     * @param {chatmessageCreateArgs} args - Arguments to create a Chatmessage.
     * @example
     * // Create one Chatmessage
     * const Chatmessage = await prisma.chatmessage.create({
     *   data: {
     *     // ... data to create a Chatmessage
     *   }
     * })
     * 
     */
    create<T extends chatmessageCreateArgs>(args: SelectSubset<T, chatmessageCreateArgs<ExtArgs>>): Prisma__chatmessageClient<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Chatmessages.
     * @param {chatmessageCreateManyArgs} args - Arguments to create many Chatmessages.
     * @example
     * // Create many Chatmessages
     * const chatmessage = await prisma.chatmessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatmessageCreateManyArgs>(args?: SelectSubset<T, chatmessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chatmessages and returns the data saved in the database.
     * @param {chatmessageCreateManyAndReturnArgs} args - Arguments to create many Chatmessages.
     * @example
     * // Create many Chatmessages
     * const chatmessage = await prisma.chatmessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chatmessages and only return the `id`
     * const chatmessageWithIdOnly = await prisma.chatmessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatmessageCreateManyAndReturnArgs>(args?: SelectSubset<T, chatmessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Chatmessage.
     * @param {chatmessageDeleteArgs} args - Arguments to delete one Chatmessage.
     * @example
     * // Delete one Chatmessage
     * const Chatmessage = await prisma.chatmessage.delete({
     *   where: {
     *     // ... filter to delete one Chatmessage
     *   }
     * })
     * 
     */
    delete<T extends chatmessageDeleteArgs>(args: SelectSubset<T, chatmessageDeleteArgs<ExtArgs>>): Prisma__chatmessageClient<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Chatmessage.
     * @param {chatmessageUpdateArgs} args - Arguments to update one Chatmessage.
     * @example
     * // Update one Chatmessage
     * const chatmessage = await prisma.chatmessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatmessageUpdateArgs>(args: SelectSubset<T, chatmessageUpdateArgs<ExtArgs>>): Prisma__chatmessageClient<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Chatmessages.
     * @param {chatmessageDeleteManyArgs} args - Arguments to filter Chatmessages to delete.
     * @example
     * // Delete a few Chatmessages
     * const { count } = await prisma.chatmessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatmessageDeleteManyArgs>(args?: SelectSubset<T, chatmessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatmessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatmessages
     * const chatmessage = await prisma.chatmessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatmessageUpdateManyArgs>(args: SelectSubset<T, chatmessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatmessages and returns the data updated in the database.
     * @param {chatmessageUpdateManyAndReturnArgs} args - Arguments to update many Chatmessages.
     * @example
     * // Update many Chatmessages
     * const chatmessage = await prisma.chatmessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chatmessages and only return the `id`
     * const chatmessageWithIdOnly = await prisma.chatmessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends chatmessageUpdateManyAndReturnArgs>(args: SelectSubset<T, chatmessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Chatmessage.
     * @param {chatmessageUpsertArgs} args - Arguments to update or create a Chatmessage.
     * @example
     * // Update or create a Chatmessage
     * const chatmessage = await prisma.chatmessage.upsert({
     *   create: {
     *     // ... data to create a Chatmessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatmessage we want to update
     *   }
     * })
     */
    upsert<T extends chatmessageUpsertArgs>(args: SelectSubset<T, chatmessageUpsertArgs<ExtArgs>>): Prisma__chatmessageClient<$Result.GetResult<Prisma.$chatmessagePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Chatmessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessageCountArgs} args - Arguments to filter Chatmessages to count.
     * @example
     * // Count the number of Chatmessages
     * const count = await prisma.chatmessage.count({
     *   where: {
     *     // ... the filter for the Chatmessages we want to count
     *   }
     * })
    **/
    count<T extends chatmessageCountArgs>(
      args?: Subset<T, chatmessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatmessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatmessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatmessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatmessageAggregateArgs>(args: Subset<T, ChatmessageAggregateArgs>): Prisma.PrismaPromise<GetChatmessageAggregateType<T>>

    /**
     * Group by Chatmessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatmessageGroupByArgs} args - Group by arguments.
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
      T extends chatmessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatmessageGroupByArgs['orderBy'] }
        : { orderBy?: chatmessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatmessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatmessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatmessage model
   */
  readonly fields: chatmessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatmessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatmessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the chatmessage model
   */ 
  interface chatmessageFieldRefs {
    readonly id: FieldRef<"chatmessage", 'String'>
    readonly userId: FieldRef<"chatmessage", 'Int'>
    readonly input: FieldRef<"chatmessage", 'String'>
    readonly content: FieldRef<"chatmessage", 'String'>
    readonly createdAt: FieldRef<"chatmessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatmessage findUnique
   */
  export type chatmessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
    /**
     * Filter, which chatmessage to fetch.
     */
    where: chatmessageWhereUniqueInput
  }

  /**
   * chatmessage findUniqueOrThrow
   */
  export type chatmessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
    /**
     * Filter, which chatmessage to fetch.
     */
    where: chatmessageWhereUniqueInput
  }

  /**
   * chatmessage findFirst
   */
  export type chatmessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
    /**
     * Filter, which chatmessage to fetch.
     */
    where?: chatmessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatmessages to fetch.
     */
    orderBy?: chatmessageOrderByWithRelationInput | chatmessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatmessages.
     */
    cursor?: chatmessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatmessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatmessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatmessages.
     */
    distinct?: ChatmessageScalarFieldEnum | ChatmessageScalarFieldEnum[]
  }

  /**
   * chatmessage findFirstOrThrow
   */
  export type chatmessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
    /**
     * Filter, which chatmessage to fetch.
     */
    where?: chatmessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatmessages to fetch.
     */
    orderBy?: chatmessageOrderByWithRelationInput | chatmessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatmessages.
     */
    cursor?: chatmessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatmessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatmessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatmessages.
     */
    distinct?: ChatmessageScalarFieldEnum | ChatmessageScalarFieldEnum[]
  }

  /**
   * chatmessage findMany
   */
  export type chatmessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
    /**
     * Filter, which chatmessages to fetch.
     */
    where?: chatmessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatmessages to fetch.
     */
    orderBy?: chatmessageOrderByWithRelationInput | chatmessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatmessages.
     */
    cursor?: chatmessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatmessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatmessages.
     */
    skip?: number
    distinct?: ChatmessageScalarFieldEnum | ChatmessageScalarFieldEnum[]
  }

  /**
   * chatmessage create
   */
  export type chatmessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
    /**
     * The data needed to create a chatmessage.
     */
    data: XOR<chatmessageCreateInput, chatmessageUncheckedCreateInput>
  }

  /**
   * chatmessage createMany
   */
  export type chatmessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatmessages.
     */
    data: chatmessageCreateManyInput | chatmessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatmessage createManyAndReturn
   */
  export type chatmessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * The data used to create many chatmessages.
     */
    data: chatmessageCreateManyInput | chatmessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatmessage update
   */
  export type chatmessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
    /**
     * The data needed to update a chatmessage.
     */
    data: XOR<chatmessageUpdateInput, chatmessageUncheckedUpdateInput>
    /**
     * Choose, which chatmessage to update.
     */
    where: chatmessageWhereUniqueInput
  }

  /**
   * chatmessage updateMany
   */
  export type chatmessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatmessages.
     */
    data: XOR<chatmessageUpdateManyMutationInput, chatmessageUncheckedUpdateManyInput>
    /**
     * Filter which chatmessages to update
     */
    where?: chatmessageWhereInput
    /**
     * Limit how many chatmessages to update.
     */
    limit?: number
  }

  /**
   * chatmessage updateManyAndReturn
   */
  export type chatmessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * The data used to update chatmessages.
     */
    data: XOR<chatmessageUpdateManyMutationInput, chatmessageUncheckedUpdateManyInput>
    /**
     * Filter which chatmessages to update
     */
    where?: chatmessageWhereInput
    /**
     * Limit how many chatmessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatmessage upsert
   */
  export type chatmessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
    /**
     * The filter to search for the chatmessage to update in case it exists.
     */
    where: chatmessageWhereUniqueInput
    /**
     * In case the chatmessage found by the `where` argument doesn't exist, create a new chatmessage with this data.
     */
    create: XOR<chatmessageCreateInput, chatmessageUncheckedCreateInput>
    /**
     * In case the chatmessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatmessageUpdateInput, chatmessageUncheckedUpdateInput>
  }

  /**
   * chatmessage delete
   */
  export type chatmessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
    /**
     * Filter which chatmessage to delete.
     */
    where: chatmessageWhereUniqueInput
  }

  /**
   * chatmessage deleteMany
   */
  export type chatmessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatmessages to delete
     */
    where?: chatmessageWhereInput
    /**
     * Limit how many chatmessages to delete.
     */
    limit?: number
  }

  /**
   * chatmessage without action
   */
  export type chatmessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatmessage
     */
    select?: chatmessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatmessage
     */
    omit?: chatmessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatmessageInclude<ExtArgs> | null
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
    fname: 'fname',
    mname: 'mname',
    lname: 'lname',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatmessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    input: 'input',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ChatmessageScalarFieldEnum = (typeof ChatmessageScalarFieldEnum)[keyof typeof ChatmessageScalarFieldEnum]


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


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    fname?: StringFilter<"user"> | string
    mname?: StringNullableFilter<"user"> | string | null
    lname?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    chatmessage?: ChatmessageListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    fname?: SortOrder
    mname?: SortOrderInput | SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    chatmessage?: chatmessageOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    fname?: StringFilter<"user"> | string
    mname?: StringNullableFilter<"user"> | string | null
    lname?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    chatmessage?: ChatmessageListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    fname?: SortOrder
    mname?: SortOrderInput | SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    fname?: StringWithAggregatesFilter<"user"> | string
    mname?: StringNullableWithAggregatesFilter<"user"> | string | null
    lname?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type chatmessageWhereInput = {
    AND?: chatmessageWhereInput | chatmessageWhereInput[]
    OR?: chatmessageWhereInput[]
    NOT?: chatmessageWhereInput | chatmessageWhereInput[]
    id?: StringFilter<"chatmessage"> | string
    userId?: IntFilter<"chatmessage"> | number
    input?: StringFilter<"chatmessage"> | string
    content?: StringFilter<"chatmessage"> | string
    createdAt?: DateTimeFilter<"chatmessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type chatmessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    input?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type chatmessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: chatmessageWhereInput | chatmessageWhereInput[]
    OR?: chatmessageWhereInput[]
    NOT?: chatmessageWhereInput | chatmessageWhereInput[]
    userId?: IntFilter<"chatmessage"> | number
    input?: StringFilter<"chatmessage"> | string
    content?: StringFilter<"chatmessage"> | string
    createdAt?: DateTimeFilter<"chatmessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type chatmessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    input?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: chatmessageCountOrderByAggregateInput
    _avg?: chatmessageAvgOrderByAggregateInput
    _max?: chatmessageMaxOrderByAggregateInput
    _min?: chatmessageMinOrderByAggregateInput
    _sum?: chatmessageSumOrderByAggregateInput
  }

  export type chatmessageScalarWhereWithAggregatesInput = {
    AND?: chatmessageScalarWhereWithAggregatesInput | chatmessageScalarWhereWithAggregatesInput[]
    OR?: chatmessageScalarWhereWithAggregatesInput[]
    NOT?: chatmessageScalarWhereWithAggregatesInput | chatmessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"chatmessage"> | string
    userId?: IntWithAggregatesFilter<"chatmessage"> | number
    input?: StringWithAggregatesFilter<"chatmessage"> | string
    content?: StringWithAggregatesFilter<"chatmessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"chatmessage"> | Date | string
  }

  export type userCreateInput = {
    fname: string
    mname?: string | null
    lname: string
    email: string
    password: string
    chatmessage?: chatmessageCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    fname: string
    mname?: string | null
    lname: string
    email: string
    password: string
    chatmessage?: chatmessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    fname?: StringFieldUpdateOperationsInput | string
    mname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chatmessage?: chatmessageUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    mname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chatmessage?: chatmessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    fname: string
    mname?: string | null
    lname: string
    email: string
    password: string
  }

  export type userUpdateManyMutationInput = {
    fname?: StringFieldUpdateOperationsInput | string
    mname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    mname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type chatmessageCreateInput = {
    id?: string
    input: string
    content: string
    createdAt?: Date | string
    user: userCreateNestedOneWithoutChatmessageInput
  }

  export type chatmessageUncheckedCreateInput = {
    id?: string
    userId: number
    input: string
    content: string
    createdAt?: Date | string
  }

  export type chatmessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutChatmessageNestedInput
  }

  export type chatmessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatmessageCreateManyInput = {
    id?: string
    userId: number
    input: string
    content: string
    createdAt?: Date | string
  }

  export type chatmessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatmessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ChatmessageListRelationFilter = {
    every?: chatmessageWhereInput
    some?: chatmessageWhereInput
    none?: chatmessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type chatmessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    mname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    mname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    mname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
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

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type chatmessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    input?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type chatmessageAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type chatmessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    input?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type chatmessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    input?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type chatmessageSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type chatmessageCreateNestedManyWithoutUserInput = {
    create?: XOR<chatmessageCreateWithoutUserInput, chatmessageUncheckedCreateWithoutUserInput> | chatmessageCreateWithoutUserInput[] | chatmessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chatmessageCreateOrConnectWithoutUserInput | chatmessageCreateOrConnectWithoutUserInput[]
    createMany?: chatmessageCreateManyUserInputEnvelope
    connect?: chatmessageWhereUniqueInput | chatmessageWhereUniqueInput[]
  }

  export type chatmessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<chatmessageCreateWithoutUserInput, chatmessageUncheckedCreateWithoutUserInput> | chatmessageCreateWithoutUserInput[] | chatmessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chatmessageCreateOrConnectWithoutUserInput | chatmessageCreateOrConnectWithoutUserInput[]
    createMany?: chatmessageCreateManyUserInputEnvelope
    connect?: chatmessageWhereUniqueInput | chatmessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type chatmessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<chatmessageCreateWithoutUserInput, chatmessageUncheckedCreateWithoutUserInput> | chatmessageCreateWithoutUserInput[] | chatmessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chatmessageCreateOrConnectWithoutUserInput | chatmessageCreateOrConnectWithoutUserInput[]
    upsert?: chatmessageUpsertWithWhereUniqueWithoutUserInput | chatmessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: chatmessageCreateManyUserInputEnvelope
    set?: chatmessageWhereUniqueInput | chatmessageWhereUniqueInput[]
    disconnect?: chatmessageWhereUniqueInput | chatmessageWhereUniqueInput[]
    delete?: chatmessageWhereUniqueInput | chatmessageWhereUniqueInput[]
    connect?: chatmessageWhereUniqueInput | chatmessageWhereUniqueInput[]
    update?: chatmessageUpdateWithWhereUniqueWithoutUserInput | chatmessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: chatmessageUpdateManyWithWhereWithoutUserInput | chatmessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: chatmessageScalarWhereInput | chatmessageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type chatmessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<chatmessageCreateWithoutUserInput, chatmessageUncheckedCreateWithoutUserInput> | chatmessageCreateWithoutUserInput[] | chatmessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: chatmessageCreateOrConnectWithoutUserInput | chatmessageCreateOrConnectWithoutUserInput[]
    upsert?: chatmessageUpsertWithWhereUniqueWithoutUserInput | chatmessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: chatmessageCreateManyUserInputEnvelope
    set?: chatmessageWhereUniqueInput | chatmessageWhereUniqueInput[]
    disconnect?: chatmessageWhereUniqueInput | chatmessageWhereUniqueInput[]
    delete?: chatmessageWhereUniqueInput | chatmessageWhereUniqueInput[]
    connect?: chatmessageWhereUniqueInput | chatmessageWhereUniqueInput[]
    update?: chatmessageUpdateWithWhereUniqueWithoutUserInput | chatmessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: chatmessageUpdateManyWithWhereWithoutUserInput | chatmessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: chatmessageScalarWhereInput | chatmessageScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutChatmessageInput = {
    create?: XOR<userCreateWithoutChatmessageInput, userUncheckedCreateWithoutChatmessageInput>
    connectOrCreate?: userCreateOrConnectWithoutChatmessageInput
    connect?: userWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateOneRequiredWithoutChatmessageNestedInput = {
    create?: XOR<userCreateWithoutChatmessageInput, userUncheckedCreateWithoutChatmessageInput>
    connectOrCreate?: userCreateOrConnectWithoutChatmessageInput
    upsert?: userUpsertWithoutChatmessageInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutChatmessageInput, userUpdateWithoutChatmessageInput>, userUncheckedUpdateWithoutChatmessageInput>
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

  export type chatmessageCreateWithoutUserInput = {
    id?: string
    input: string
    content: string
    createdAt?: Date | string
  }

  export type chatmessageUncheckedCreateWithoutUserInput = {
    id?: string
    input: string
    content: string
    createdAt?: Date | string
  }

  export type chatmessageCreateOrConnectWithoutUserInput = {
    where: chatmessageWhereUniqueInput
    create: XOR<chatmessageCreateWithoutUserInput, chatmessageUncheckedCreateWithoutUserInput>
  }

  export type chatmessageCreateManyUserInputEnvelope = {
    data: chatmessageCreateManyUserInput | chatmessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type chatmessageUpsertWithWhereUniqueWithoutUserInput = {
    where: chatmessageWhereUniqueInput
    update: XOR<chatmessageUpdateWithoutUserInput, chatmessageUncheckedUpdateWithoutUserInput>
    create: XOR<chatmessageCreateWithoutUserInput, chatmessageUncheckedCreateWithoutUserInput>
  }

  export type chatmessageUpdateWithWhereUniqueWithoutUserInput = {
    where: chatmessageWhereUniqueInput
    data: XOR<chatmessageUpdateWithoutUserInput, chatmessageUncheckedUpdateWithoutUserInput>
  }

  export type chatmessageUpdateManyWithWhereWithoutUserInput = {
    where: chatmessageScalarWhereInput
    data: XOR<chatmessageUpdateManyMutationInput, chatmessageUncheckedUpdateManyWithoutUserInput>
  }

  export type chatmessageScalarWhereInput = {
    AND?: chatmessageScalarWhereInput | chatmessageScalarWhereInput[]
    OR?: chatmessageScalarWhereInput[]
    NOT?: chatmessageScalarWhereInput | chatmessageScalarWhereInput[]
    id?: StringFilter<"chatmessage"> | string
    userId?: IntFilter<"chatmessage"> | number
    input?: StringFilter<"chatmessage"> | string
    content?: StringFilter<"chatmessage"> | string
    createdAt?: DateTimeFilter<"chatmessage"> | Date | string
  }

  export type userCreateWithoutChatmessageInput = {
    fname: string
    mname?: string | null
    lname: string
    email: string
    password: string
  }

  export type userUncheckedCreateWithoutChatmessageInput = {
    id?: number
    fname: string
    mname?: string | null
    lname: string
    email: string
    password: string
  }

  export type userCreateOrConnectWithoutChatmessageInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutChatmessageInput, userUncheckedCreateWithoutChatmessageInput>
  }

  export type userUpsertWithoutChatmessageInput = {
    update: XOR<userUpdateWithoutChatmessageInput, userUncheckedUpdateWithoutChatmessageInput>
    create: XOR<userCreateWithoutChatmessageInput, userUncheckedCreateWithoutChatmessageInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutChatmessageInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutChatmessageInput, userUncheckedUpdateWithoutChatmessageInput>
  }

  export type userUpdateWithoutChatmessageInput = {
    fname?: StringFieldUpdateOperationsInput | string
    mname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateWithoutChatmessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    fname?: StringFieldUpdateOperationsInput | string
    mname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type chatmessageCreateManyUserInput = {
    id?: string
    input: string
    content: string
    createdAt?: Date | string
  }

  export type chatmessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatmessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatmessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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