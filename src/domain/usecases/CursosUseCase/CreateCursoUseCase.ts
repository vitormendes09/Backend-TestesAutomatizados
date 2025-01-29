import { ICreateCursoUseCase } from "contracts/UseCaseContracts/ICursoUseCase";
import { ICurso } from "contracts/EntityContracts/ICurso";

export class CreateCursoUseCase implements ICreateCursoUseCase{

    private curso: ICurso[] = [];

    perform(entrada: ICurso): Promise<ICurso> { // Regra de negócio: Não pode haver cursos com nomes duplicados

        const cursoExistente = this.curso.find(curso => curso.nome === entrada.nome)

        if (cursoExistente){
            throw new Error("Já existe um curso com esse nome.")
        }

        this.curso.push(entrada)

        return Promise.resolve(entrada);
    }

}