import { ICurso } from '../src/contracts/useCaseContracts/ICursoUseCase';
import { IUseCase } from '../src/contracts/useCaseContracts/IUseCase';
import {CursoController} from '../src/controllers/cursoController'
import { IUpdateCursoUseCase , IDeleteCursoUseCase, IGetCursoUseCase, ICreateCursoUseCase} from '../src/contracts/useCaseContracts/ICursoUseCase';

class UseCaseFake implements IUseCase<ICurso, ICurso>{

    chamado: boolean = false;

    async perform(entrada: ICurso): Promise<ICurso> {
       
        this.chamado = true;
        return entrada;
    }
}

class UseCaseFakeUpdate implements IUpdateCursoUseCase {
    chamado: boolean = false;
    async perform(entrada: { idCurso: number; data: Partial<ICurso>; }): Promise<any> {
        this.chamado = true
        return{
            idCurso: entrada.idCurso,
            ...entrada.data
        } as ICurso
    }

}

class UseCaseFakeDelete implements IDeleteCursoUseCase{

    chamado: boolean = false;

    async perform(entrada: number): Promise<boolean> {
        this.chamado = true;
        return true;
    }

}

class UseCaseFakeCreate implements ICreateCursoUseCase{
    chamado: boolean = false;

    async perform(entrada: ICurso): Promise<ICurso> {
        this.chamado = true;
        return entrada;
    }
    
}

class UseCaseFakeGet implements IGetCursoUseCase{
    chamado: boolean = false;

    async perform(entrada: number): Promise<ICurso | undefined> {
        this.chamado = true;
        // Simulando a obtenção de um curso
        return {
            idCurso: entrada,
            nome: 'Curso de Teste',
            descricao: 'Descrição do curso de teste',
            duracao: 4,
            nivel: 'Bacharelado',
            coordenador: 'Coordenador Teste'
        } as ICurso;
    }

}
class ResponseFake{
    statusCodeInformado: number = 0;
    jsonInformado: any = null;
    endChamado: boolean = false;

    status(code:number): ResponseFake{
        this.statusCodeInformado = code;
        return this;
    }

    json(data: any): ResponseFake {
        this.jsonInformado = data;
        return this;
    }

    end(): ResponseFake {
        this.endChamado = true;
        return this;
    }
}

function makeSUT() {
    const cursos: ICurso[] = [];
    const createCursoUseCase = new UseCaseFakeCreate();
    const updateCursoUseCase = new UseCaseFakeUpdate();
    const deleteCursoUseCase = new UseCaseFakeDelete();
    const getCursoUseCase = new UseCaseFakeGet();

    const cursoController = new CursoController(createCursoUseCase, updateCursoUseCase, deleteCursoUseCase, getCursoUseCase);

    const requestStub = {
        method: 'POST',
        body: {
            idCurso: 1,
            nome: 'Curso de Teste',
            descricao: 'Descrição do curso de teste',
            duracao: 4,
            nivel: 'Bacharelado',
            coordenador: 'Coordenador Teste'
        }
    } as any as import('express').Request;

    const responseFake = new ResponseFake();

    return { cursoController, requestStub, responseFake, cursos, createCursoUseCase, updateCursoUseCase, deleteCursoUseCase, getCursoUseCase };
}

describe('CursoController', () => {
    
    it('deve instanciar CursoController', () => {
        const { cursoController } = makeSUT();
        expect(cursoController).toBeDefined();
    });

    it('deve chamar handle para criar um curso', async () => {
        const { cursoController, requestStub, responseFake, createCursoUseCase } = makeSUT();
        await cursoController.handle(requestStub, responseFake as any as import('express').Response);
        
        expect(createCursoUseCase.chamado).toBe(true);
        expect(responseFake.statusCodeInformado).toBe(200);
        expect(responseFake.jsonInformado.mensagem).toBe('Curso processado com sucesso');
        expect(responseFake.jsonInformado.resultado).toEqual({
            idCurso: 1,
            nome: 'Curso de Teste',
            descricao: 'Descrição do curso de teste',
            duracao: 4,
            nivel: 'Bacharelado',
            coordenador: 'Coordenador Teste'
        });
    });

    // Adicionar mais testes para PUT, DELETE, GET
});


