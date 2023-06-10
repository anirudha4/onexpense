import Button from '@components/common/Button';
import Form from '@components/common/Form';
import SegmentedControl from '@components/common/Form/SegmentedControl';
import Select from '@components/common/Form/Select/Select';
import { COLLECTIONS } from '@config/collections';
import { useCategory, useForm, useMutation, useUser } from '@hooks';
import useModal from '@hooks/useModal';
import { useEffect, useMemo, useRef } from 'react';

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
    { id: 'description', label: 'Description', fieldType: 'textarea', name: 'description', placeholder: 'Few words about the transaction' },
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
    const { closeModal } = useModal();

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
        try {
            await createTransaction(transactionValues);
            setData(FORM_INITIAL_FIELDS);
        } catch (err) {
            console.log({ err });
        }
        formRef.current.name.focus();
    }

    // effects
    useEffect(() => {
        // close modal on escape
        const fn = e => e.key === 'Escape' && closeModal()
        document.addEventListener('keydown', fn);
        return () => document.removeEventListener('keydown', fn);
    }, [])

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
                                options={field.options}
                            />
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
                    case 'textarea':
                        return <Form.Textarea key={field.id} onChange={handleChange} value={form[field.name]} id={field.id} name={field.name} label={field.label} placeholder={field.placeholder} rows={5} />
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