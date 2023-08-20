import { FormContainer, FormGroup, HomeContainer, ListContainer } from "./App";
import { GlobalStyles } from "./styles/global";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "./lib/axios";
import { useEffect, useState } from "react";

const formEmployeeSchema = zod.object({
  nome: zod.string(),
  genero: zod.string(),
  celular: zod.string(),
});

type tipoDeFuncionario = {
  id: number;
  nome: string;
  genero: string;
  celular: string;
};

export function App() {

  const [employees, setEmployee] = useState<tipoDeFuncionario[]>([]);

  const { register, handleSubmit, reset } = useForm<tipoDeFuncionario>({
    resolver: zodResolver(formEmployeeSchema),
    defaultValues: {
      celular: "",
      genero: "",
      nome: "",
    },
  });

  async function fetchEmployees() {
    const response = await api.get("employees");
    setEmployee(response.data);
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function handleSubmitForm(data: tipoDeFuncionario) {
    const { celular, genero, nome } = data;
    const response = await api.post("/employees", {
      nome: nome,
      genero: genero,
      celular: celular,
    });

    const newEmployee: tipoDeFuncionario = response.data;
    setEmployee((state) => [newEmployee, ...state]);

    reset();
  }

  return (
    <>
      <GlobalStyles />
      <HomeContainer>
        <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
          <h2>Formulário para cadastro</h2>
          <FormGroup>
            <label htmlFor="name">Nome completo</label>
            <input type="text" {...register("nome")} />
          </FormGroup>

          <FormGroup>
            <label htmlFor="genero">Género</label>
            <input type="text" {...register("genero")} />
          </FormGroup>

          <FormGroup>
            <label htmlFor="celular">Celular</label>
            <input type="text" {...register("celular")} />
          </FormGroup>

          <FormGroup>
            <button type="submit">Cadastrar</button>
          </FormGroup>
        </FormContainer>

        <ListContainer>
          <h2>Lista de funcionários</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Género</th>
                  <th>Celular</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => {
                  return (
                    <tr key={emp.id}>
                      <td>{emp.nome}</td>
                      <td>{emp.genero}</td>
                      <td>{emp.celular}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ListContainer>
      </HomeContainer>
    </>
  );
}
