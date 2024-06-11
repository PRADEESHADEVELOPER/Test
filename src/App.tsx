import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Typography,
    Grid
} from '@mui/joy';
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

// Define form data and error types
interface FormData {
    Level: string,
    ProductDescription: string,
    QtyperParent: string,
    ImmediateParent: string,
    ExcessTolerance: string,
    MaterialStandardCost: string,
    TotalMateriallCost: string,
    Currency: string,
    LabourOverhead: string,
    ProfitMargin: string,
    SalesPrice: string,
    mrp: string,
    Discount: string
}

interface FormErrors {
    Level?: string,
    ProductDescription?: string,
    QtyperParent?: string,
    ImmediateParent?: string,
    ExcessTolerance?: string,
    MaterialStandardCost?: string,
    TotalMateriallCost?: string,
    Currency?: string,
    LabourOverhead?: string,
    ProfitMargin?: string,
    SalesPrice?: string,
    mrp?: string,
    Discount?: string
}

const MyForm: React.FC = () => {
    // Form state
    const [formData, setFormData] = useState<FormData>({
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
    });

    // Form errors state
    const [formErrors, setFormErrors] = useState<FormErrors>({});

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Validate form data
            await validationSchema.validate(formData, { abortEarly: false });
            // If validation passes, process form data
            console.log('Form submitted:', formData);
            setFormErrors({});
        } catch (err) {
            // If validation fails, set form errors
            const errors = (err as Yup.ValidationError).inner.reduce((acc, curr) => {
                return { ...acc, [curr.path as string]: curr.message };
            }, {});
            setFormErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Level</FormLabel>
                        <Input
                            name="Level"
                            value={formData.Level}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.Level && <Typography sx={{ color: 'error.main' }}>{formErrors.Level}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Product Description</FormLabel>
                        <Input
                            type="text"
                            name="ProductDescription"
                            value={formData.ProductDescription}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.ProductDescription && <Typography sx={{ color: 'error.main' }}>{formErrors.ProductDescription}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Qty per Parent</FormLabel>
                        <Input
                            type="text"
                            name="QtyperParent"
                            value={formData.QtyperParent}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.QtyperParent && <Typography sx={{ color: 'error.main' }}>{formErrors.QtyperParent}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Immediate Parent</FormLabel>
                        <Input
                            type="text"
                            name="ImmediateParent"
                            value={formData.ImmediateParent}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.ImmediateParent && <Typography sx={{ color: 'error.main' }}>{formErrors.ImmediateParent}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Excess Tolerance</FormLabel>
                        <Input
                            type="text"
                            name="ExcessTolerance"
                            value={formData.ExcessTolerance}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.ExcessTolerance && <Typography sx={{ color: 'error.main' }}>{formErrors.ExcessTolerance}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Material Standard Cost</FormLabel>
                        <Input
                            type="text"
                            name="MaterialStandardCost"
                            value={formData.MaterialStandardCost}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.MaterialStandardCost && <Typography sx={{ color: 'error.main' }}>{formErrors.MaterialStandardCost}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Total Material Cost</FormLabel>
                        <Input
                            type="text"
                            name="TotalMateriallCost"
                            value={formData.TotalMateriallCost}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.TotalMateriallCost && <Typography sx={{ color: 'error.main' }}>{formErrors.TotalMateriallCost}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Currency</FormLabel>
                        <Input
                            type="text"
                            name="Currency"
                            value={formData.Currency}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.Currency && <Typography sx={{ color: 'error.main' }}>{formErrors.Currency}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Labour & Overhead Adder</FormLabel>
                        <Input
                            type="text"
                            name="LabourOverhead"
                            value={formData.LabourOverhead}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.LabourOverhead && <Typography sx={{ color: 'error.main' }}>{formErrors.LabourOverhead}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Profit Margin</FormLabel>
                        <Input
                            type="text"
                            name="ProfitMargin"
                            value={formData.ProfitMargin}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.ProfitMargin && <Typography sx={{ color: 'error.main' }}>{formErrors.ProfitMargin}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Sales Price</FormLabel>
                        <Input
                            type="text"
                            name="SalesPrice"
                            value={formData.SalesPrice}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.SalesPrice && <Typography sx={{ color: 'error.main' }}>{formErrors.SalesPrice}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>MRP</FormLabel>
                        <Input
                            type="text"
                            name="mrp"
                            value={formData.mrp}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.mrp && <Typography sx={{ color: 'error.main' }}>{formErrors.mrp}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <FormControl>
                        <FormLabel>Discount</FormLabel>
                        <Input
                            type="text"
                            name="Discount"
                            value={formData.Discount}
                            onChange={handleChange}
                            required
                        />
                        {formErrors.Discount && <Typography sx={{ color: 'error.main' }}>{formErrors.Discount}</Typography>}
                    </FormControl>
                </Grid>
                <Grid xs={12}>
                    <Button type="submit">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default MyForm;
