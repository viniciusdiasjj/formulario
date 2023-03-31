// @ts-nocheck
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent {
  formulario: FormGroup; // Declaração do FormGroup

  imagens = [ {
    midia: '',
    mimeType: "", // Tipo MIME da imagem
  }];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Construtor para inicializar o FormGroup
    this.formulario = this.formBuilder.group({
      titulo: ["", Validators.required],
      responsavel: ["", Validators.required],
      cargo: ["", Validators.required],
      descricao: ["", Validators.required],
      cargaHoraria: ["", Validators.required],
      qtdAvaliacoes: ["", Validators.required],
      mediaAcerto: ["", Validators.required],
    });
  }

  salvarTreinamento() {
    // Função para salvar treinamento
    alert("Treinamento salvo com sucesso!");
  }

  selecionarArquivo(evento: any) {
    // Função para selecionar arquivo (imagem)
    const files = evento.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      console.log(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Converte o binário da imagem para base64
        this.getBinaries(file, "").then((r) => {
          this.imagens.push({

            mimeType: file.type,
            midia: r

          })
  
        });
      };
    }
  }

  getBinaries(file: any, message: any) {
    // Função para converter o binário da imagem para base64
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = function () {
        let arrayBuffer = this.result;
        let array = new Uint8Array(arrayBuffer as any);
        let binaryString = _arrayBufferToBase64(array);
        resolve(binaryString);
        function _arrayBufferToBase64(buffer: any) {
          var binary = "";
          var bytes = new Uint8Array(buffer);
          var len = bytes.byteLength;
          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          return window.btoa(binary);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  }

  enviarFormulario() {
    // Função para enviar o formulário
    if (this.formulario.valid) {
      console.log("Formulário enviado:", this.formulario.value);
      this.router.navigate(["/agradecimento"], {
        state: { mensagem: "Obrigado por enviar seu formulário!" },
      });
    }
  }
}
