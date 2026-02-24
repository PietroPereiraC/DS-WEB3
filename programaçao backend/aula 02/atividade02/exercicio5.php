<?php
class Documento {
    private $numero;

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($numero) {
        $this->numero = $numero;
    }
}

class CPF extends Documento {
    public function validar() {
        $cpf = preg_replace('/[^0-9]/', '', $this->getNumero());

        if (strlen($cpf) != 11 || preg_match('/^(\d)\1{10}$/', $cpf)) {
            return false;
        }

        for ($t = 9; $t < 11; $t++) {
            $d = 0;
            for ($c = 0; $c < $t; $c++) {
                $d += $cpf[$c] * (($t + 1) - $c);
            }
            $d = ((10 * $d) % 11) % 10;
            if ($cpf[$t] != $d) {
                return false;
            }
        }
        return true;
    }
}


$cpf = new CPF();
$cpf->setNumero('123.456.789-09'); 
echo "CPF: " . $cpf->getNumero() . "<br/>";
echo "Válido? " . ($cpf->validar() ? 'Sim' : 'Não') . "<br/><br/>";

$cpf2 = new CPF();
$cpf2->setNumero('529.982.247-25'); 
echo "CPF: " . $cpf2->getNumero() . "<br/>";
echo "Válido? " . ($cpf2->validar() ? 'Sim' : 'Não') . "<br/>";
?>