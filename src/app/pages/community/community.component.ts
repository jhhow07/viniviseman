import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {
  items = [
    {
      title: 'Como funciona a lista de espera?',
      content:
        'A lista de espera garante que você será notificado quando novas vagas forem abertas. Abrimos entre 50-100 vagas por vez para manter a qualidade das interações e do suporte. Membros da lista têm prioridade quando as vagas são liberadas.',
      expanded: false,
    },
    {
      title: 'Preciso participar todos os dias das lives?',
      content:
        'Não! As lives são um recurso disponível para quando você precisar de foco e companhia para realizar suas tarefas. Você pode participar nos horários que funcionam melhor para sua rotina.',
      expanded: false,
    },
    {
      title: 'Como funciona o suporte na comunidade?',
      content:
        'Membros têm acesso a canais exclusivos de suporte dentro da plataforma, com tempo de resposta máximo de 24 horas úteis. Além disso, durante as lives semanais você pode tirar dúvidas diretamente comigo nos intervalos dos pomodoros.',
      expanded: false,
    },
    {
      title: 'Posso cancelar quando quiser?',
      content:
        'Sim! Não há fidelidade ou multa por cancelamento. Você pode cancelar sua assinatura a qualquer momento, mantendo o acesso até o final do período pago.',
      expanded: false,
    },
    {
      title: 'Como é feito o pagamento?',
      content:
        'O pagamento é feito via cartão de crédito, de forma recorrente mensal. Trabalhamos apenas com cartão para garantir praticidade e segurança nas renovações.',
      expanded: false,
    },
  ];

  toggleItem(index: number): void {
    this.items[index].expanded = !this.items[index].expanded;
  }
}
