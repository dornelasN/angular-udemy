import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-new-server-form',
  templateUrl: './new-server-form.component.html',
  styleUrls: ['./new-server-form.component.css']
})
export class NewServerFormComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() {}

  ngOnInit() {}

  onAddServer(serverNameInput, serverContentInput) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput, serverContentInput) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
