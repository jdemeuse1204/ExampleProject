import "./home.less";
import { getAllSoftware } from "../../../api/software";
import { ValidationController, ValidationControllerFactory, ValidationRules } from 'aurelia-validation';
import { Renderer } from "../../validation/renderer";

export class Home {

  filterText: string = '';
  results: ISoftware[] = [];
  validationController: ValidationController;

  // this is aurelia's dependency injection, inject a new instance of a validation
  // controller factory
  static inject = [ValidationControllerFactory];
  constructor(validationControllerFactory) {
    // Creates a validation controller for this scope
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.validationController.addRenderer(new Renderer());

    // Create our validation rules
    ValidationRules.ensure("filterText")
    .required()
    .then()
    .matches(/^(\d+\.)?(\d+\.)?(\*|\d+)$/)
    .withMessage("Version Number must have a major verion, minor and revision are optional.")
    .on(this);
  }

  async onFilterTextChanged() {
    const validationResult = await this.validationController.validate();

    if (validationResult.valid === false) {
      return;
    }

    this.results = await getAllSoftware(this.filterText);
  }
}
