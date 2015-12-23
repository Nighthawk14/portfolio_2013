import {Component, Injectable} from 'angular2/core';
var technosData = require('./technos.json');
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'techno',
  pipes: [TranslatePipe],
  template: require('./techno.html')
})
class Techno {
  title: String;
  description: String;
  tags: Array<String>;
  CSSClass: String;

  private base = 6;
  private index = 0;
  private row = 0;

  private getOffset() {
    return -27 * this.row;
  }
}

@Component({
  selector: 'techno-mobile',
  template: require('./techno-mobile.html')
})

@Component({
  selector: 'technos',
  template: require('./technos.html'),
  directives: [Techno]
})
@Injectable()
export class Technos {
  technos: Array<Techno> = [];
  ngOnInit() {
    technosData.forEach(techno => {
      this.technos.push(techno);
    })
  }
}