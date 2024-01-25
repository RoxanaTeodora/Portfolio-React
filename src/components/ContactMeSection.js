import React, { useEffect } from "react";
import { useFormik, resetForm } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: { firstName: "", email: "", type: "", comment: "" },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      type: Yup.string().required("Type of enquiry is required"),
      comment: Yup.string().required("Your message is required"),
    }),
  });

  React.useEffect(() => {
    if (response) {
      if (response.type === "success") {
        onOpen(
          "success",
          `Your message has been sent successfully, ${formik.values.firstName}!`
        );
      } else {
        onOpen("error", `An error occurred: ${response.message}`);
      }
    }
  }, [response, onOpen, formik.values.firstName]);

  //   return (
  //     <FullScreenSection
  //       isDarkBackground
  //       backgroundColor="#512DA8"
  //       py={16}
  //       spacing={8}
  //     >
  //       <VStack w="1024px" p={32} alignItems="flex-start">
  //         <Heading as="h1" id="contactme-section">
  //           Contact me
  //         </Heading>
  //         <Box p={6} rounded="md" w="100%">
  //           <form>
  //             <VStack spacing={4}>
  //               {/* <FormControl isInvalid={false}> */}
  //               <FormControl
  //                 isInvalid={formik.touched.firstName && formik.errors.firstName}
  //               >
  //                 <FormLabel htmlFor="firstName">Name</FormLabel>
  //                 <Input id="firstName" name="firstName" />
  //                 <FormErrorMessage></FormErrorMessage>
  //               </FormControl>
  //               <FormControl
  //                 isInvalid={formik.touched.email && formik.errors.email}
  //               >
  //                 <FormLabel htmlFor="email">Email Address</FormLabel>
  //                 <Input id="email" name="email" type="email" />
  //                 <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
  //               </FormControl>
  //               <FormControl>
  //                 <FormLabel htmlFor="type">Type of enquiry</FormLabel>
  //                 <Select id="type" name="type">
  //                   <option value="hireMe" textColor="black">
  //                     Freelance project proposal
  //                   </option>
  //                   <option value="openSource" textColor="black">
  //                     Open source consultancy session
  //                   </option>
  //                   <option value="other" textColor="black">
  //                     Other
  //                   </option>
  //                 </Select>
  //               </FormControl>
  //               <FormControl
  //                 isInvalid={formik.touched.comment && formik.errors.comment}
  //               >
  //                 <FormLabel htmlFor="comment">Your message</FormLabel>
  //                 <Textarea id="comment" name="comment" height={250} />
  //                 <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
  //               </FormControl>
  //               <Button type="submit" colorScheme="purple" width="full">
  //                 Submit
  //               </Button>
  //             </VStack>
  //           </form>
  //         </Box>
  //       </VStack>
  //     </FullScreenSection>
  //   );
  // };

  // export default LandingSection;
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#62565c"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input {...formik.getFieldProps("firstName")} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input type="email" {...formik.getFieldProps("email")} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.type && formik.errors.type}
              >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...formik.getFieldProps("type")}>
                  <option value="" disabled backgroundColor="black">
                    Select an option
                  </option>
                  <option value="hireMe" color="black">
                    Freelance project proposal
                  </option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea height={250} {...formik.getFieldProps("comment")} />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                backgroundColor="#d17147"
                color="white"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
