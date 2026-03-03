<?php

class artista {
    public $nome;
    public $genero;

    public function __construct($nome, $genero) {
        $this->nome = $nome;
        $this->genero = $genero;
    }

    public function exibirDados() {
        return "Olá, meu nome é {$this->nome} e sou do gênero {$this->genero}.";
    }
    public function alterarDados($novoNome, $novoGenero) {
        $this->nome = $novoNome;
        $this->genero = $novoGenero;    
    }
}
class musica {
    public $titulo;
    public $duracao;

    public function __construct($titulo, $duracao) {
        $this->titulo = $titulo;
        $this->duracao = $duracao;
    }

    public function exibirDados() {
        return "Olá, minha música é {$this->titulo} e tem duração de {$this->duracao} minutos.";
    }
    public function alterarDados($novoTitulo, $novaDuracao) {
        $this->titulo = $novoTitulo;
        $this->duracao = $novaDuracao;
    }
}

$pessoa1 = new artista("João", "Rock");
echo $pessoa1->exibirDados();
echo "<br>";

$musica1 = new musica("Bohemian Rhapsody", 5.5);
echo "<br>";
echo $musica1->exibirDados();
echo "<br>";


?>