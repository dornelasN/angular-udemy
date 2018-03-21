import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  Input,
  OnDestroy,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnChanges {
  @Input() element: { type: string; name: string; content: string };
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  // LIFECYCLE HOOKS! :)

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('text content: ' + this.header.nativeElement.textContent);
    console.log('content paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('ng on change!');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    console.log('ng do check');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    console.log('ng after content init');
    console.log('content paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked() {
    console.log('ng after content checked!');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    console.log('ng after VIEW init');
    console.log('text content: ' + this.header.nativeElement.textContent);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
    console.log('ng after VIEW checked!');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    console.log('ng on destroy!!!');
  }
}
