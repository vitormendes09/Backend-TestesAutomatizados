export class Disciplina {
    private id: string;
    private nome: string;
    private codigo: string;
    private cargaHoraria: number;
    private tipo: string;   // Obrigatória, Optativa, Eletiva
 
 

    constructor(
        id: string,
        nome: string,
        codigo: string,
        cargaHoraria: number,
        tipo: string,
       
      
    ) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.cargaHoraria = cargaHoraria;
        this.tipo = tipo;
      
  
    }

    public getId(): string {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public setCodigo(codigo: string): void {
        this.codigo = codigo;
    }

    public getCargaHoraria(): number {
        return this.cargaHoraria;
    }

    public setCargaHoraria(cargaHoraria: number): void {
        this.cargaHoraria = cargaHoraria;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

   

    
}
