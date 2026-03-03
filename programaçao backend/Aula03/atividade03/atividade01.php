<?php

class Pessoa {
    public $nome;
    public $telefone;

    public function __construct($nome, $telefone) {
        $this->nome = $nome;
        $this->telefone = $telefone;
    }

    public function exibirDados() {
        return "Olá,sou dono{$this->nome} e meu telefone é {$this->telefone}.";
    }
    public function alterarDados($novoNome, $novoTelefone) {
        $this->nome = $novoNome;
        $this->telefone = $novoTelefone;
    }
}

class animal {
    public $nome;
    public $especie;

    public function __construct($nome, $especie) {
        $this->nome = $nome;
        $this->especie = $especie;
    }
    public function exibirDados() {
        return "Olá, meu nome é {$this->nome} e sou um(a) {$this->especie}.";
    }
}


$animal1 = new animal("Rex", "Cachorro");
echo "<br>";
echo $animal1->exibirDados();
echo "<br>";

$pessoa1 = new Pessoa("João", "11949688945");
echo $pessoa1->exibirDados();
echo "<br>";



?>