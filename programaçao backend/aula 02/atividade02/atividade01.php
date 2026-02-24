<?php

class Pessoa {
    public $nome = "Rasmus";
    protected $idade = 48;

    public function verDados(){
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
    }
}

class Gerente extends Pessoa {
    protected $salario = 5000;

    public function verDados(){
        echo get_class($this) . "<br/>";
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        echo $this->salario . "<br/>";
    }
}

class Funcionario extends Gerente {

    public function calcularBonus(){
        return $this->salario * 0.20;
    }

    public function verDados(){
        echo get_class($this) . "<br/>";
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        echo $this->salario . "<br/>";
        echo $this->calcularBonus() . "<br/>";
    }
}

$f = new Gerente();
$f->verDados();
$f = new Funcionario();
$f->verDados();

?>