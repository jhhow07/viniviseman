import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  items = [
    {
      title: 'Como participar das lives de coworking?',
      content:
        'As lives acontecem gratuitamente na Twitch, de segunda a sexta, das 9h às 18h. É um espaço de coworking onde utilizamos o método Pomodoro para manter foco e produtividade. Durante os intervalos, compartilhamos experiências e nos apoiamos mutuamente. Basta acessar o canal e participar!',
      expanded: false,
    },
    {
      title: 'Como posso propor uma parceria?',
      content:
        'Para parcerias, use o formulário de contato selecionando "Parcerias" no campo assunto. Procuramos colaborar com marcas e profissionais que compartilham nossos valores de autenticidade e compromisso com transformação real.',
      expanded: false,
    },
    {
      title: 'Qual o tempo de resposta para mensagens?',
      content:
        'Respondemos todas as mensagens em até 48 horas úteis. Membros do Clube dos CEOs têm acesso a canais prioritários de atendimento e suporte direto dentro da comunidade.',
      expanded: false,
    },
    {
      title: 'Quais as formas de pagamento aceitas?',
      content:
        'Aceitamos cartão de crédito, PIX e boleto bancário. Para assinaturas como o Clube dos CEOs, trabalhamos apenas com cartão de crédito para garantir praticidade nas renovações mensais.',
      expanded: false,
    },
    {
      title: 'Qual o horário de atendimento?',
      content:
        'Nosso horário de atendimento é de segunda a sexta, das 9h às 18h. Durante as lives na Twitch, você pode interagir diretamente comigo nos intervalos dos pomodoros. Mensagens enviadas fora do horário comercial são respondidas nos próximos dias úteis.',
      expanded: false,
    },
  ];

  toggleItem(index: number): void {
    this.items[index].expanded = !this.items[index].expanded;
  }
}
