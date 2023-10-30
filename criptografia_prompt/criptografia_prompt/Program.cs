using System.Reflection.Metadata.Ecma335;

var senha = Console.ReadLine();

while (true)
    {
    SepararLetras(senha);
    }
void SepararLetras(string senha){

    string[] letras = senha.Split(Char[]);    
    foreach (string t in letras)
        {
        Console.WriteLine(t);
        }
    }    