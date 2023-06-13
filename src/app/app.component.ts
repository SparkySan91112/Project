import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  name: string = '';
  
  interests: string[] = [];
  availableInterests: string[] = ['Programming', 'Drawing', 'Designing', 'Reading', 'Writing', 'Tailoring', 'Cooking', 'Singing', 'Technology', 'Producing'];
  public careers: { [key: string]: string[] } = {
    GraphicDesigner: ["Designing", "Drawing", "Technology"],
    Writer: ["Writing"],
    Chef: ["Cooking"],
    Singer: ["Singing"],
    Programmer: ["Programming"],
    Tailor: ["Tailoring"],
    Producer: ["Producing"],
    DesktopTechnician: ["Technology"],
    Artist:["Drawing"],
    Designer:["Designing"],
    BookReviewer: ["Reading"],    
  };
  selectedCareers: string[] = [];
  suggestedCareer: string = '';
  showCareer: boolean = false;

  toggleSelection(interest: string) {
    const index = this.interests.indexOf(interest);
    if (index > -1) {
      this.interests.splice(index, 1);
    } else {
      this.interests.push(interest);
    }
    if (this.interests.length === 1) {
      this.confirmSelection();
    } else {
      this.showCareer = false;
    }
    this.updateSelectedCareers();
  }

  isSelected(interest: string): boolean {
    return this.interests.includes(interest);
  }

  updateSelectedCareers() {
    this.selectedCareers = [];
    for (const career in this.careers) {
      const careerInterests = this.careers[career];
      if (careerInterests.every(interest => this.interests.includes(interest))) {
        this.selectedCareers.push(career);
      }
    }
  }

  
  confirmSelection() {
    if (this.interests.length > 0) {
      this.showCareer = true;
      this.suggestedCareer = this.selectedCareers[0];
    }
  }
}
