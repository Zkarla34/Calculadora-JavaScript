  function sumar() {
           
    var dato1 = document.getElementById('dato1').value;
    var dato2 = document.getElementById('dato2').value;
    var resultado = document.getElementById('resultado');
    resultado.value=parseFloat(dato1)+parseFloat(dato2);

    var dato3 = prompt("Digite el primer número.");
    var dato4 = prompt("Digite el segundo número");
    var res = parseInt(dato3) + parseInt(dato4);
    alert(res);
    }
  function restar() {
    
    var dato1 = document.getElementById('dato1').value;
    var dato2 = document.getElementById('dato2').value;
    var resultado = document.getElementById('resultado');
    resultado.value=parseFloat(dato1)-parseFloat(dato2);

    var dato3 = prompt("Digite el primer número.");
    var dato4 = prompt("Digite el segundo número");
    var res = parseInt(dato3) - parseInt(dato4);
    alert(res);
    }
    
    function multiplicar() {
   
    var dato1 = document.getElementById('dato1').value;
    var dato2 = document.getElementById('dato2').value;
    var resultado = document.getElementById('resultado');
    resultado.value=parseFloat(dato1)*parseFloat(dato2);

    var dato3 = prompt("Digite el primer número.");
    var dato4 = prompt("Digite el segundo número");
    var res = parseInt(dato3) * parseInt(dato4);
    alert(res);
    }

    function dividir() {
    
    var dato1 = document.getElementById('dato1').value;
    var dato2 = document.getElementById('dato2').value;
    var resultado = document.getElementById('resultado');
    resultado.value=parseFloat(dato1)/parseFloat(dato2);
      if (dato1==0 || dato2==0)
      {
          alert('Debes ingresar un número diferente de Cero');
      }
      else 
      {
      resultado.value=parseFloat(dato1)/parseFloat(dato2);
      }

      var dato3 = prompt("Digite el primer número.");
      var dato4 = prompt("Digite el segundo número");
      var res = parseInt(dato3) / parseInt(dato4);
      if (dato3==0 || dato4==0)
      {
          alert('Debes ingresar un número diferente de Cero');
      }
      else 
      {
        alert(res);
      }
    }