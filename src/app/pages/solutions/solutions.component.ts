import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NewsletterComponent } from "../../components/newsletter/newsletter.component";

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, FooterComponent, NewsletterComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  items = [
    {
      title: 'Por que preciso da autodisciplina para ser realizado?',
      content:
        'A autodisciplina é a ponte entre suas intenções e realizações. Não se trata apenas de força de vontade, mas de desenvolver um sistema inteligente que te ajuda a manter consistência nas ações que realmente importam para você, alinhando seus objetivos com seus valores mais profundos.',
      expanded: false,
    },
    {
      title: 'Como o Clube dos CEOs é diferente de outras comunidades?',
      content:
        'O Clube dos CEOs não é apenas uma comunidade, é um movimento de pessoas comprometidas com seu desenvolvimento pessoal. Aqui, você encontra metodologia testada, suporte próximo e genuíno, e pessoas que, como você, estão dispostas a assumir o protagonismo de suas vidas através da autodisciplina inteligente.',
      expanded: false,
    },
    {
      title: 'Não tenho tempo. Como posso implementar tudo isso na minha rotina?',
      content:
        'Nossa metodologia é desenhada para pessoas ocupadas. Começamos com pequenos passos consistentes, integrando novas práticas de forma gradual e sustentável. Não é sobre adicionar mais tarefas, mas sobre fazer escolhas mais inteligentes com o tempo que você já tem.',
      expanded: false,
    },
    {
      title: 'Já tentei várias vezes e não consegui manter a disciplina. Por que seria diferente agora?',
      content:
        'A diferença está na abordagem. Não trabalhamos com força de vontade pura, mas com um sistema testado que integra autodisciplina inteligente, propósito e suporte contínuo. Além disso, você terá acesso a uma comunidade que te apoia e ferramentas práticas que facilitam a implementação.',
      expanded: false,
    },
    {
      title: 'Qual a diferença entre os programas oferecidos?',
      content:
        'Cada programa tem um objetivo específico. O Clube dos CEOs é nossa comunidade central para suporte contínuo, o Clube do Livro foca em desenvolvimento através da leitura, os Desafios são imersões temáticas, as Masterclasses são aprofundamentos específicos, e os Cursos são jornadas completas de transformação.',
      expanded: false,
    },
    {
      title: 'Como sei se estou pronto para começar?',
      content:
        'Se você está cansado de começar e recomeçar, se sente que tem potencial para mais mas algo está faltando, você está pronto. Não é preciso estar "perfeitamente preparado" - nossa metodologia é desenhada para te acompanhar desde o primeiro passo.',
      expanded: false,
    },
    {
      title: 'Como funciona o suporte nas soluções oferecidas?',
      content:
        'Cada solução tem seu nível de suporte específico, desde interações diárias no Clube dos CEOs até acompanhamento focado nos cursos e desafios. O importante é que você nunca estará sozinho - nossa comunidade e equipe estão sempre presentes para ajudar.',
      expanded: false,
    },
    {
      title: 'E se eu não me adaptar à metodologia?',
      content:
        'Nossa metodologia é flexível e adaptável às diferentes necessidades e estilos de vida. Trabalhamos juntos para encontrar a melhor forma de implementação para você. Além disso, oferecemos garantia em todos os nossos programas para que você possa experimentar sem riscos.',
      expanded: false,
    },
    {
      title: 'Qual o investimento necessário para começar?',
      content:
        'Temos opções para diferentes necessidades e momentos, começando com o Clube dos CEOs por R$19,99/mês. O mais importante é começar - você pode expandir sua jornada gradualmente conforme sentir necessidade.',
      expanded: false,
    },
    {
      title: 'Por que trabalhar autodisciplina com propósito?',
      content:
        'Disciplina sem propósito é insustentável. Quando alinhamos nossas ações com nossos valores mais profundos, a disciplina deixa de ser um fardo e se torna uma ferramenta poderosa de transformação. É aí que encontramos a verdadeira realização.',
      expanded: false,
    },
  ];

  toggleItem(index: number): void {
    this.items[index].expanded = !this.items[index].expanded;
  }
}
