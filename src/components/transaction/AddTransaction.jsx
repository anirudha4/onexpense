import Button from '@components/common/Button';
import Form from '@components/common/Form';
import SegmentedControl from '@components/common/Form/SegmentedControl';
import Select, { SelectOption } from '@components/common/Form/Select';
import { COLLECTIONS } from '@config/collections';
import { useCategory, useForm, useMutation, useUser } from '@hooks';
import { useMemo, useRef } from 'react';

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
        id: 'type', label: 'Type', fieldType: 'segmentedControl', name: 'type', placeholder: 'Eg. Expense',
        options: ['Expense', 'Income', 'Investment']
    },
]

const AddTransaction = () => {
    const [form, handleChange, setData] = useForm(FORM_INITIAL_FIELDS);
    const { user } = useUser();

    const formRef = useRef();

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
            type: form.type,
            userId: user.id
        }
        await createTransaction(transactionValues);
        setData(FORM_INITIAL_FIELDS);
        formRef.current.name.focus();
    }

    return (
        <Form onSubmit={handleSubmit} ref={formRef}>
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
                    case 'segmentedControl':
                        return <SegmentedControl
                            options={field.options}
                            label={field.label}
                            value={form[field.name]}
                            onChange={handleChange}
                            name={field.name}
                            id={field.id}
                        />
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