import { hashPassword } from "../lib/passwordHandler";
import prisma from "../lib/prisma";
import type { CreateUserInput, UpdateUserInput } from "../schemas/user.schema";

export async function getUsers() {
    return prisma.user.findMany({
        where: { isActive: true },
        omit: { passwordHash: true }
    });
}

export async function getUser(id: string) {
    const user = await prisma.user.findUnique({
        where: { id },
        omit: { passwordHash: true }
    });
    if (!user) throw new Error("User not found");
    return user;
}

export async function createUser(data: CreateUserInput) {

    const { password, ...rest } = data;

    const hashedPassword = await hashPassword(password);

    return prisma.user.create({
        data: {
            ...rest,
            passwordHash: hashedPassword,
        },
        omit: { passwordHash: true }
    });
}

export async function deleteUser(id: string) {
    return prisma.user.update({
        where: { id },
        data: { isActive: false },
        omit: { passwordHash: true }
    });
}

export async function updateUser(id: string, data: UpdateUserInput) {
    return prisma.user.update({
        where: { id },
        data,
        omit: { passwordHash: true }
    });
}