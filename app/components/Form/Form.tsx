import { Form, Formik, type FormikHelpers } from "formik";
import { type ReactNode } from "react";

type FormikFormProps = {
	validationSchema: any;
	dataValues: any;
	onSubmit: (values: any, { setSubmitting }: FormikHelpers<any>) => Promise<void>;
	children: ReactNode;
};

const FormikForm = ({ validationSchema, dataValues, onSubmit, children }: FormikFormProps) => {
	return (
		<Formik
			validationSchema={validationSchema}
			initialValues={dataValues}
			onSubmit={onSubmit}
		>
			<Form>{children}</Form>
		</Formik>
	);
};

export default FormikForm;
