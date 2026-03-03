<?php

class Pessoa {
    public $nome;
    public $idade;

    public function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function exibirDados() {
        return "Olá, meu nome é {$this->nome} e tenho {$this->idade} anos.";
    }
    public function alterarDados($novoNome, $novaIdade) {
        $this->nome = $novoNome;
        $this->idade = $novaIdade;
    }
}

$pessoa1 = new Pessoa("João", 30);
echo $pessoa1->exibirDados();
echo "<br>";
$pessoa1->alterarDados("Maria", 25);
echo $pessoa1->exibirDados();

?>