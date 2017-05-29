//todo: hacer una funcion factoria (mdlConstructor) que elimine repeticion de codigo en los constructores
//todo: convertir esto en modulo typscript para poder importar solo las funciones requeridas, no todas a la vez
import {Renderer2, ElementRef} from "@angular/core";

export function isDefined(value: any): boolean { return typeof value !== 'undefined' }

export function setClass(elementRef: ElementRef, className: string, renderer: Renderer2): void {
  renderer.addClass(elementRef.nativeElement, className)
}

export function setAttribute(elementRef: ElementRef, attrName: string, attrValue: string, renderer: Renderer2): void {
  renderer.setAttribute(elementRef.nativeElement, attrName, attrValue)
}

export function randomStr(): string { return Math.random().toString(36).substr(2, 5) }

export function isSubstring(subStr: string, bigStr: string): boolean {
  if (bigStr){
    return bigStr.indexOf(subStr) > -1;
  } else {
    return false;
  }
}

export function isAttributeValid(attribute: string, validValues: string[]): boolean {
  return validValues.indexOf(attribute) >= 0;
}
