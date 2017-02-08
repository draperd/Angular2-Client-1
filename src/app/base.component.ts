import { Component, Input } from '@angular/core';

/**
 * This class should be extended by all components that can be nested as transcluded content of 
 * other components. Extending a common base class makes it possible for the @ContentChildren
 * predicate to find that all sub-classes (rather than needing to specify a specific type).
 */
@Component({})
export class Base {

    @Input() relativePath: String;
    @Input() list:any;
}