import Button from '@components/common/Button';
import Form from '@components/common/Form';
import Select, { SelectOption } from '@components/common/Form/Select';
import { COLLECTIONS } from '@config/collections';
import { useCategory, useForm, useMutation, useUser } from '@hooks';
import { useMemo } from 'react';

const FORM_INITIAL_FIELDS = {
    name: '',
    // description: '',
    amount: '',
    categoryId: {},
    // paidTo: {},
    type: 'Expense',

}
const TRANSACTION_FORM_FIELDS = [
    { id: 'name', label: 'Name', type: 'text', name: 'name', placeholder: 'Eg. House Rent' },
    // { id: 'description', label: 'Description', fieldType: 'textarea', name: 'description', placeholder: 'Few words about the transaction' },
    { id: 'amount', label: 'Amount', type: 'number', name: 'amount', placeholder: 'Eg. 7500.00' },
    { id: 'categoryId', label: 'Category', fieldType: 'select', name: 'categoryId', placeholder: 'Eg. Rent' },
    // { id: 'paidTo', label: 'Paid To', fieldType: 'select', name: 'paidTo', placeholder: 'Eg. Land Lord' },
    {
        id: 'type', label: 'Type', fieldType: 'select', name: 'type', placeholder: 'Eg. Expense',
        options: [
            { id: 'Expense', label: 'Expense', value: 'Expense' },
            { id: 'Income', label: 'Income', value: 'Income' },
            { id: 'Investment', label: 'Investment', value: 'Investment' },
        ]
    },
]

const AddTransaction = () => {
    const [form, handleChange, setData] = useForm(FORM_INITIAL_FIELDS);
    const { user } = useUser();

    const { createDocument: createTransaction, loading } = useMutation(COLLECTIONS.transactions(user.id));
    const { categories } = useCategory();
    const fields = useMemo(() => {
        return TRANSACTION_FORM_FIELDS.map(field => {
            if (field.name === 'categoryId')
                return { ...field, options: categories.map(category => ({ id: category.id, label: category.name, value: category.id })) }
            return field
        })
    }, [categories]);

    const handleSubmit = async e => {
        const transactionValues = {
            ...form,
            categoryId: form.categoryId.id,
            type: form.type.id,
            userId: user.id
        }
        await createTransaction(transactionValues);
        setData(FORM_INITIAL_FIELDS);
    }

    return (
        <Form onSubmit={handleSubmit}>
            {fields.map(field => {
                switch (field.fieldType) {
                    case 'select':
                        return (
                            <Select
                                key={field.id}
                                onChange={handleChange}
                                value={form[field.name]}
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                label={field.label}
                                placeholder={field.placeholder}
                            >
                                {field.options?.map(option => (
                                    <SelectOption option={option} key={option.id}>
                                        {option.label}
                                    </SelectOption>
                                ))}
                            </Select>
                        )
                    default:
                        return <Form.Input key={field.id} onChange={handleChange} value={form[field.name]} type={field.type} id={field.id} name={field.name} label={field.label} placeholder={field.placeholder} />
                }
            })}
            <Button loading={loading}>
                Add Transaction
            </Button>
        </Form>
    )
}

export default AddTransaction