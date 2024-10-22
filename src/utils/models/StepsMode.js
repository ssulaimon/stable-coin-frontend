export class StepsModel {
    stepNumber;
    stepName;
    stepDetails;
    icon;
    constructor(stepNumber, stepName, stepDetails, icon) {
        this.stepName = stepName;
        this.stepNumber = stepNumber;
        this.stepDetails = stepDetails;
        this.icon = icon
    }
}