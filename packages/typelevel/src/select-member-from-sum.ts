type valueof<A> = A[keyof A]

export type SelectMemberFromSum<
  K extends PropertyKey,
  V,
  Map extends object
> = Map extends {
  [k in K]: V
} & infer A
  ? unknown extends A
    ? Map
    : A
  : never

export type QuestionType = valueof<typeof QuestionType>
export const QuestionType = {
  Boolean: "boolean",
  Date: "date",
  Number: "number",
  String: "string",
  List: "list",
  Struct: "struct",
  // BeneficiaryList: "beneficiary_list",
  // EnumeratedList: "enum_list",
  // SecondaryContact: "secondary_contact",
  // SensitiveString: "sensitive_string",
  // SetOnceString: "set_once_string",
  // SetOnceNumber: "set_once_number",
  // SetOnceBoolean: "set_once_boolean",
  // StatelessAddress: "stateless_address",
  // TrustedContact: "contact",
} as const

type Answer =
  | { _id: string; type: typeof QuestionType.String; value: string }
  | { _id: string; type: typeof QuestionType.Number; value: number }
  | { _id: string; type: typeof QuestionType.Boolean; value: boolean }
  | { _id: string; type: typeof QuestionType.Date; value: Date }
  | { _id: string; type: typeof QuestionType.List; value: Answer[] }
  | {
      _id: string
      type: typeof QuestionType.Struct
      value: Record<string, Answer>
    }

type SelectAnswer<Q extends QuestionType> = SelectMemberFromSum<
  "type",
  Q,
  Answer
>
const selectAnswer =
  <A>() =>
  <Q extends QuestionType>(questionType: Q): SelectAnswer<Q> => {
    return
  }

export type BooleanAnswer = SelectAnswer<typeof QuestionType.Boolean>
export const booleanAnswer = (
  _id: BooleanAnswer["_id"],
  value: BooleanAnswer["value"]
): BooleanAnswer => ({ _id, value, type: QuestionType.Boolean })
export type DateAnswer = SelectAnswer<typeof QuestionType.Date>
export const dateAnswer = (
  _id: DateAnswer["_id"],
  value: DateAnswer["value"]
): DateAnswer => ({ _id, value, type: QuestionType.Date })
export type NumberAnswer = SelectAnswer<typeof QuestionType.Number>
export const numberAnswer = (
  _id: NumberAnswer["_id"],
  value: NumberAnswer["value"]
): NumberAnswer => ({ _id, value, type: QuestionType.Number })
export type StringAnswer = SelectAnswer<typeof QuestionType.String>
export const stringAnswer = (
  _id: StringAnswer["_id"],
  value: StringAnswer["value"]
): StringAnswer => ({ _id, value, type: QuestionType.String })
export type ListAnswer = SelectAnswer<typeof QuestionType.List>
export const listAnswer = (
  _id: ListAnswer["_id"],
  value: ListAnswer["value"]
): ListAnswer => ({ _id, value, type: QuestionType.List })
export type StructAnswer = SelectAnswer<typeof QuestionType.Struct>
export const structAnswer = (
  _id: StructAnswer["_id"],
  value: StructAnswer["value"]
): StructAnswer => ({ _id, value, type: QuestionType.Struct })

const QuestionTypeToAnswerConstructor = {
  [QuestionType.Boolean]: booleanAnswer,
  [QuestionType.Date]: dateAnswer,
  [QuestionType.Number]: numberAnswer,
  [QuestionType.String]: stringAnswer,
  [QuestionType.List]: listAnswer,
  [QuestionType.Struct]: structAnswer,
}

const worksWithAnswersGenerically = <
  _Answer extends Answer,
  A extends SelectAnswer<_Answer["type"]>
>(
  answer: _Answer
): A | never => {
  return answer as SelectAnswer<typeof answer.type>
}

const _numberAnswer: Answer = { _id: "some id", type: "number", value: 2 }
const result = worksWithAnswersGenerically(_numberAnswer)

type None = { _tag: "None" }
type Some<A> = { _tag: "Some"; value: A }
type Option<A> = None | Some<A>
type Nullable<A> = null | A

export type Unbox<O> = { readonly [K in keyof O]: O[K] }

export type OptionalToOption<A> = {
  [K in keyof A]-?: undefined extends A[K]
    ? Option<Exclude<A[K], undefined>>
    : OptionalToOption<A[K]>
}

export type OptionalToNull<A> = {
  [K in keyof A]-?: undefined extends A[K]
    ? null | Exclude<A[K], undefined>
    : A[K]
}

type Response = {
  propA?: string
  propB: number
  propC: undefined
  propD: null
  propE?: string | null
  propF: boolean | undefined
  propG: boolean | undefined | null
  propH?: boolean | undefined | null
}

export type AsOption = OptionalToOption<Response>
export type AsNull = OptionalToNull<Response>
