import { RenderInstruction, ValidateResult } from 'aurelia-validation';
import * as $ from 'jquery';

export class Renderer {
  render(instruction: RenderInstruction) {

    for(let { elements } of instruction.unrender) {
      for (let element of elements) {
        success(element);
      }
    }

    for (let { result, elements } of instruction.render) {
      for (let element of elements) {

        if (!!result && result.valid === true) {
          success(element);
        } else {
          fail(element, result);
        }
      }
    }
  }
}

function success(element: Element) {
  let $parent:any = $(element).closest(".error-container");

  if (!$parent.length) {
    $parent = $(element).parent();
  }

  $parent.removeClass("error").removeClass("success");
  $parent.find('div.error-message').remove();

}

function fail(element: Element, result: ValidateResult) {
  let $parent:any = $(element).closest(".error-container");

  if (!$parent.length) {
    $parent = $(element).parent();
  }

  $parent.removeClass("error").removeClass("success");

  // remove last error so they don't stack
  $parent.find('div.error-message').remove();
  $parent.addClass("error");

  $(`<div class='error-message'><i class='fa fa-exclamation-triangle'></i>&nbsp;${result.message}</div>`).appendTo($parent);
}
