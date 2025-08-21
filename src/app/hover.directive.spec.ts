import { ElementRef, Renderer2 } from '@angular/core';
import { HoverDirective } from './hover.directive';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('p'));
    const mockRenderer = jasmine.createSpyObj<Renderer2>('Renderer2', ['setStyle']);

    const directive = new HoverDirective(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
