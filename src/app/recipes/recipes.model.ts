export class Recipes {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string,des: string,ip: string)
    {
        this.name=name;
        this.description=des;
        this.imagePath=ip;
    }

}