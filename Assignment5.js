
/*

You are building a shipping application. Write a program that takes the type of package ("standard",
"express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
"overnight" would be delivered the next day.

*/

function findDeliveryTime(packageType) {
    let estimatedTime;
  
    switch (packageType.toLowerCase()) {
      case "standard":
        estimatedTime = "3-5 days";
        break;
      case "express":
        estimatedTime = "1-2 days";
        break;
      case "overnight":
        estimatedTime = "next day";
        break;
      default:
        estimatedTime = "not known";
        break;
    }
  
    console.log(`Estimated delivery time for ${packageType} package: ${estimatedTime}`);
  }
  
  // Test the function with different package types
  findDeliveryTime("standard");
  findDeliveryTime("express");
  findDeliveryTime("overnight");
  findDeliveryTime("custom"); // not known
  