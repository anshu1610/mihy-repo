import {
  getStepperObject,
  getCommonApplyHeader,
  getCommonApplyFooter,
  getCommonCard,
  getCommonApplySubHeader,
  getCommonApplyParagraph,
  getBreak,
  getLabel
} from "./apply/utils";

const stepsData = [
  {
    props: {
      label: "Trade Details",
      current: true
    }
  },
  {
    props: {
      label: "Owner Details"
    }
  },
  {
    props: {
      label: "Documents"
    }
  },
  {
    props: {
      label: "Summary"
    }
  }
];
const stepperData = getStepperObject(
  { props: { currentIndex: 1, className: "bx--progress-overide" } },
  stepsData
);
const commonApplyHeader = getCommonApplyHeader(
  "Application for New Trade License (2018-2019)"
);
const commonApplyFooter = getCommonApplyFooter({
  nextButton: {
    uiFramework: "material-ui",
    componentPath: "Button",
    props: {
      variant:"contained",
      color: "primary"
    },
    children:{
      nextButtonLabel:getLabel("Next Step")
    }
  }
});
const commonCardOne = getCommonCard({
  header: getCommonApplySubHeader("Please Provide Trade Details"),
  break: getBreak(),
  paragraph: getCommonApplyParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  )
});
const commonCardTwo = getCommonCard({
  header: getCommonApplySubHeader("Please Provide Trade Location Details"),
  break: getBreak(),
  paragraph: getCommonApplyParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  )
});

const screenConfig = {
  uiFramework: "carbon",
  name: "mihytradeliceceapply",
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        className: "common-div-css"
      },
      children: {
        header: commonApplyHeader,
        stepper: stepperData,
        footer: commonApplyFooter,
        tradeDetails: commonCardOne,
        tradeLocationDetails: commonCardTwo
      }
    }
  }
};

export default screenConfig;
