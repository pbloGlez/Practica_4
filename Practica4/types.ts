export type Persona = {
    nombre : string;
    id: string
};

export type Planeta = {
    id : string; 
    idPersona : Persona[]
};

export type Dimensiones = {
    id : string;
    idPlaneta : Planeta[]
};

export type TARDIS = {
    anio_actual : number;
    camuflaje : string;
    numReg : number;
    idDimension : Dimensiones[]
};
