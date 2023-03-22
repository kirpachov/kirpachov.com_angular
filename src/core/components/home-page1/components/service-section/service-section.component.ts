import { Component } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss']
})
export class ServiceSectionComponent {
  readonly steps = [
    {
      title: $localize`:@@serviceSectionStep1Title:Specifications`,
      description: $localize`:@@serviceSectionStep1Description:To solve a problem, it's necessary to understand it thoroughly. It's essential to understand the client's needs before starting with the design. In this phase, the crucial point is communication between the client and the developer.I will also provide you with a detailed quote and timeline.`,
    },
    {
      title: $localize`:@@serviceSectionStep2Title:Design`,
      description: $localize`:@@serviceSectionStep2Description:After the project is approved, I will start working on the design. I will provide you with a design mockup and a prototype.`,
    },
    {
      title: $localize`:@@serviceSectionStep3Title:Development`,
      description: $localize`:@@serviceSectionStep3Description:After the design is approved, I will start working on the development. I will provide you periodic updates of the development with some screenshots and prototypes of the app.`,
    },
    {
      title: $localize`:@@serviceSectionStep4Title:Deployment`,
      description: $localize`:@@serviceSectionStep4Description:Once the development process is completed, and then we move on to the publication of the application. After this phase, the application will be online, and the client will be able to use it to its full potential.`,
    },
    {
      title: $localize`:@@serviceSectionStep5Title:Support`,
      description: $localize`:@@serviceSectionStep5Description:Guaranteed support. Any issue with the application or the server it relies on is my responsibility. Free regular maintenance for the first 12 months after the application is delivered.`,
    },
  ];

  get isOdd(): boolean {
    return this.steps.length % 2 !== 0;
  }

  indexize(index: number): string {
    return (index + 1).toString().padStart(2, '0');
  }
}
