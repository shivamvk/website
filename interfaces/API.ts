export interface IAPIResponse<TType> {
    status: number;
    statusMessage: string;
    data: TType;
}