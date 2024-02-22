export interface BaseModel {
    readonly id: string | number; //no se puede modificar en un "middleware"
    readonly createdAt: Date;
    updatedAt: Date;
}