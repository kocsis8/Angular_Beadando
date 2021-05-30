export interface QuestionnaireResponse{
    resourceType: string,
    id: string,
    text: StandardText,
    contained?: Resource[],
    identifier?: Identifier,
    basedOn?: Reference[],
    partOf?: Reference[],
    questionnaire?: Reference,
    status: "in-progress" | "completed" | "amended" | "entered-in-error" | "stopped",
    subject?: Reference,
    encounter?: Reference,
    authored?: string,
    author?: Reference,
    source?: Reference,
    item?: Item[],
   

}

export interface Item{
    linkId: string,
    item?: Item[],
    definition?: string,
    text?: string,
    answer?: Answer[]
}

export interface Answer{
    item?: Item[],
    valueBoolean?: boolean,
    valueDecimal?: 	number,
    valueInteger?: number,	
    valueDate?: string,	
    valueDateTime?: string,	
    valueTime?: string,
    valueString?:string	
    valueUri?: string,	
    valueAttachment?:Attachment	
    valueCoding?:Coding	
    valueQuantity?:Quantity	
    valueReference?:Reference

}

export interface Quantity{
    value?: number,
    comparator?: "<" | "<=" | ">=" | ">",
    unit?: string,
    system?: string,
    code?: string 
}

export interface Attachment{
    contentType?: string,
    language?: string,
    data?: number,
    url?: string,
    size?: number,
    hash?: number,
    title?: string,
    craction?: string
}

export interface Identifier{
    use?: "usual" | "official" | "temp" | "secondary" | "old",
    type?: CodeableConcept,
    system?: string,
    value?: string,
    period?: Period,
    assigner?: string
}

export interface CodeableConcept{
    coding?: Coding[],
    text?: string
}

export interface Coding{
    system?: string,
    version?: string,
    code?: string,
    display?: string,
    userSelected?: boolean
}

export interface Period{
    start?: string,
    end?: string
}

export interface Reference{
    reference?: string,
    type?: string,
    identifier?: Identifier,
    display?: string
}

export interface StandardText{
    status: "generated" | "extensions" | "additional" | "empty",
    div: string

}

export interface Resource{
    resourceType?: string,
    id?: string,
    identifier?: Identifier[],
    meta?: Meta,
    implicitRules?: string,
    language?: string,
    gender?: string,
    birthDate?: string,
    status?: string,
    intent?: string,
    subject?: Reference,
    requester?: Reference

}

export interface Meta{
    versionId?: string,
    lastUpdate?: string,
    source?: string,
    profile?: string,
    securty?: Coding,
    tag?: Coding
}

