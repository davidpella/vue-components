<script setup>
import * as Form from "../Components/form.js";
import * as Table from "../Components/table";
</script>

<template>
    <div class="grid grid-cols-3 gap-8">
        <div class="col-span-1">
            <Form.Root>
                <header class="border-b pb-4">
                    <h1 class="text-gray-900">User Profile</h1>
                </header>

                <main class="mt-4">
                    <Form.Fieldset class="space-y-4">
                        <Form.Legend>
                            Basic Details
                        </Form.Legend>

                        <div class="space-y-6">
                            <div class="grid grid-cols-2 gap-6">
                                <div class="col-span-2 space-y-1">
                                    <Form.Label>Full Name</Form.Label>

                                    <Form.Input class="block w-full" placeholder="David Pella" />

                                    <Form.Error>
                                        The name is already exist
                                    </Form.Error>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-6">
                                <div class="col-span-2 space-y-1">
                                    <Form.Label>T-shirt Size</Form.Label>

                                    <Form.Select class="block w-full">
                                        <Form.Option>Select...</Form.Option>
                                        <Form.Option>Small</Form.Option>
                                        <Form.Option>Medium</Form.Option>
                                        <Form.Option>Large</Form.Option>
                                    </Form.Select>

                                    <Form.Help>
                                        Please select one of the options
                                    </Form.Help>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-6">
                                <div class="col-span-2 space-y-1">
                                    <Form.Label>Receipt Attachment</Form.Label>

                                    <Form.File />
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-6">
                                <div class="col-span-1 space-y-1">
                                    <Form.Label>Delivery Date</Form.Label>

                                    <Form.Input type="date" class="block w-full" />
                                </div>
                            </div>
                        </div>
                    </Form.Fieldset>
                </main>

                <footer class="flex items-center justify-end mt-6 pt-4 border-t">
                    <Form.Button>
                        Save Changes
                    </Form.Button>
                </footer>
            </Form.Root>
        </div>

        <div class="col-span-2">
            <Table.Root>
                <Table.Head>
                    <Table.Row>
                        <Table.Header>Name</Table.Header>
                        <Table.Header>Email</Table.Header>
                        <Table.Header>Phone</Table.Header>
                        <Table.Header>Active</Table.Header>
                        <Table.Header>Actions</Table.Header>
                    </Table.Row>
                </Table.Head>

                <Table.Body>
                    <Table.Row class="odd:bg-gray-100" :key="index" v-for="index in 30">
                        <Table.Cell>
                            David Pella
                        </Table.Cell>

                        <Table.Cell>
                            david.pella@example.com
                        </Table.Cell>

                        <Table.Cell>
                            +255 762 764 819
                        </Table.Cell>

                        <Table.Cell>
                            Active
                        </Table.Cell>

                        <Table.Cell>
                            <div class="inline-flex items-center space-x-2">
                                <a href="#" class="text-blue-600">View</a>
                                <a href="#" class="text-blue-600">Edit</a>
                                <a href="#" class="text-red-600">Delete</a>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </div>
    </div>
</template>