import { FC, useState } from 'react';

import { Box } from '../../elements';
import useUser from '../../hooks/use-user';

const Balances: FC = () => {
  const { user } = useUser();

  const [addIncomeOpen, setAddIncomeOpen] = useState(false);
  const [addCostOpen, setAddCostOpen] = useState(false);

  const incomes =
    user?.incomes?.reduce((acc, { amount }) => acc + amount, 0) ?? 0;
  const costs = user?.costs?.reduce((acc, { amount }) => acc + amount, 0) ?? 0;

  const toggleAddIncome = () => setAddIncomeOpen((open) => !open);
  const toggleAddCost = () => setAddCostOpen((open) => !open);

  return (
    <Box display="flex">
      <Box>
        <Box>{incomes - costs} AKZ</Box>

        <Box>Rendimentos: {incomes} AKZ</Box>
        <Box>Custos: {costs} AKZ</Box>
      </Box>
      <Box>
        <Box
          width="10rem"
          height="10rem"
          display="flex"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          border="1px solid #ccc"
          onClick={toggleAddIncome}
        >
          Adicionar Rendimento
        </Box>
        <Box
          width="10rem"
          height="10rem"
          display="flex"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          border="1px solid #ccc"
          onClick={toggleAddCost}
        >
          Adicionar Custo
        </Box>
      </Box>
    </Box>
  );
};

export default Balances;
