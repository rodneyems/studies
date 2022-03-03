import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';
import { Button } from '../../componets/Form/Button';
import { CategorySelectButton } from '../../componets/Form/CategorySelectButton';
import { InputControlled } from '../../componets/Form/InputControlled';
import { TransactionTypeButton } from '../../componets/Form/TransactionTypeButton';
import { Amount } from '../../componets/TransactionCard/styles';
import { CategorySelect } from '../CategorySelect';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles';

interface FormData{
  name: string,
  amount: string,
}

export function Register() {
  const [transactionsType, setTransactionsType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  const {
    control,
    handleSubmit
  } = useForm();
  function handleTransactionsType(transactionType: 'up' | 'down') {
    setTransactionsType(transactionType);
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }
  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }
  function handleRegister(form : FormData){
    const data = {
      name: form.name,
      amount: form.amount,
      transactionsType,
      category: category.key
    }
    console.log(data)
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputControlled name='name' control={control} placeholder='Nome' />
          <InputControlled name='amount' control={control} placeholder='Preço' />
          <TransactionsTypes>
            <TransactionTypeButton type='up' title='Income' isActive={transactionsType === 'up' ? true : false} onPress={() => handleTransactionsType('up') }/>
            <TransactionTypeButton type='down' title='Outcome' isActive={transactionsType === 'down' ? true : false} onPress={() => handleTransactionsType('down') }/>
          </TransactionsTypes>
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          ></CategorySelectButton>
        </Fields>

        <Button onPress={handleSubmit(handleRegister)} title='Confirmar'></Button>
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          closeSelectCategory={handleCloseSelectCategoryModal}
          setCategory={setCategory}
        ></CategorySelect>
      </Modal>
    </Container>
  );
}
