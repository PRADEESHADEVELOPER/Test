import React from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Typography,
    Grid
} from '@mui/joy';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define Yup validation schema
const validationSchema = Yup.object().shape({
    Level: Yup.string().required('Level is required'),
    ProductDescription: Yup.string().required('Product Description is required'),
    QtyperParent: Yup.string().required('Qty per Parent is required'),
    ImmediateParent: Yup.string().required('Immediate Parent is required'),
    ExcessTolerance: Yup.string().required('Excess Tolerance is required'),
    MaterialStandardCost: Yup.string().required('Material Standard Cost is required'),
    TotalMateriallCost: Yup.string().required('Total Material Cost is required'),
    Currency: Yup.string().required('Currency is required'),
    LabourOverhead: Yup.string().required('Labour & Overhead is required'),
    ProfitMargin: Yup.string().required('Profit Margin is required'),
    SalesPrice: Yup.string().required('Sales Price is required'),
    mrp: Yup.string().required('MRP is required'),
    Discount: Yup.string().required('Discount is required'),
});

const MyForm: React.FC = () => {
    const initialValues = {
        Level: '',
        ProductDescription: '',
        QtyperParent: '',
        ImmediateParent: '',
        ExcessTolerance: '',
        MaterialStandardCost: '',
        TotalMateriallCost: '',
        Currency: '',
        LabourOverhead: '',
        ProfitMargin: '',
        SalesPrice: '',
        mrp: '',
        Discount: ''
    };

    const handleSubmit = (values: any) => {
        console.log('Form submitted:', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <Form onSubmit={handleSubmit}>
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Level</FormLabel>
                                <Field
                                    as={Input}
                                    name="Level"
                                    onChange={handleChange}
                                    value={values.Level}
                                    required
                                />
                                {errors.Level && touched.Level && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.Level}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Product Description</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="ProductDescription"
                                    onChange={handleChange}
                                    value={values.ProductDescription}
                                    required
                                />
                                {errors.ProductDescription && touched.ProductDescription && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.ProductDescription}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Qty per Parent</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="QtyperParent"
                                    onChange={handleChange}
                                    value={values.QtyperParent}
                                    required
                                />
                                {errors.QtyperParent && touched.QtyperParent && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.QtyperParent}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Immediate Parent</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="ImmediateParent"
                                    onChange={handleChange}
                                    value={values.ImmediateParent}
                                    required
                                />
                                {errors.ImmediateParent && touched.ImmediateParent && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.ImmediateParent}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Excess Tolerance</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="ExcessTolerance"
                                    onChange={handleChange}
                                    value={values.ExcessTolerance}
                                    required
                                />
                                {errors.ExcessTolerance && touched.ExcessTolerance && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.ExcessTolerance}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Material Standard Cost</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="MaterialStandardCost"
                                    onChange={handleChange}
                                    value={values.MaterialStandardCost}
                                    required
                                />
                                {errors.MaterialStandardCost && touched.MaterialStandardCost && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.MaterialStandardCost}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Total Material Cost</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="TotalMateriallCost"
                                    onChange={handleChange}
                                    value={values.TotalMateriallCost}
                                    required
                                />
                                {errors.TotalMateriallCost && touched.TotalMateriallCost && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.TotalMateriallCost}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Currency</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="Currency"
                                    onChange={handleChange}
                                    value={values.Currency}
                                    required
                                />
                                {errors.Currency && touched.Currency && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.Currency}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Labour & Overhead Adder</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="LabourOverhead"
                                    onChange={handleChange}
                                    value={values.LabourOverhead}
                                    required
                                />
                                {errors.LabourOverhead && touched.LabourOverhead && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.LabourOverhead}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Profit Margin</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="ProfitMargin"
                                    onChange={handleChange}
                                    value={values.ProfitMargin}
                                    required
                                />
                                {errors.ProfitMargin && touched.ProfitMargin && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.ProfitMargin}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Sales Price</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="SalesPrice"
                                    onChange={handleChange}
                                    value={values.SalesPrice}
                                    required
                                />
                                {errors.SalesPrice && touched.SalesPrice && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.SalesPrice}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>MRP</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="mrp"
                                    onChange={handleChange}
                                    value={values.mrp}
                                    required
                                />
                                {errors.mrp && touched.mrp && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.mrp}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <FormControl>
                                <FormLabel>Discount</FormLabel>
                                <Field
                                    as={Input}
                                    type="text"
                                    name="Discount"
                                    onChange={handleChange}
                                    value={values.Discount}
                                    required
                                />
                                {errors.Discount && touched.Discount && (
                                    <Typography sx={{ color: 'error.main' }}>{errors.Discount}</Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid xs={12}>
                            <Button type="submit">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;
