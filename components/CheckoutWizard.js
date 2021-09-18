import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import useStyles from "../utils/style";

function CheckoutWizard({ activeStep }) {
  const classes = useStyles();
  return (
    <Stepper
      className={classes.transparentBg}
      activeStep={activeStep}
      alternativeLabel
    >
      {["Login", "Shipping Address", "Payment Method", "Place order"].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}

export default CheckoutWizard;
