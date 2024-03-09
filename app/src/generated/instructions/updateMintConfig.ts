/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from "@solana/web3.js";
import * as beet from "@metaplex-foundation/beet";
import * as beetSolana from "@metaplex-foundation/beet-solana";
import { MintPhase, mintPhaseBeet } from "../types/MintPhase";

/**
 * @category Instructions
 * @category UpdateMintConfig
 * @category generated
 */
export type UpdateMintConfigInstructionArgs = {
    newAuthority: beet.COption<web3.PublicKey>;
    mintPhase: beet.COption<MintPhase>;
    newPrice: beet.COption<beet.bignum>;
    newStartDate: beet.COption<beet.bignum>;
};
/**
 * @category Instructions
 * @category UpdateMintConfig
 * @category generated
 */
export const updateMintConfigStruct = new beet.FixableBeetArgsStruct<
    UpdateMintConfigInstructionArgs & {
        instructionDiscriminator: number[] /* size: 8 */;
    }
>(
    [
        ["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
        ["newAuthority", beet.coption(beetSolana.publicKey)],
        ["mintPhase", beet.coption(mintPhaseBeet)],
        ["newPrice", beet.coption(beet.u64)],
        ["newStartDate", beet.coption(beet.u64)],
    ],
    "UpdateMintConfigInstructionArgs",
);
/**
 * Accounts required by the _updateMintConfig_ instruction
 *
 * @property [_writable_, **signer**] authority
 * @property [_writable_] indexProtocolState
 * @property [_writable_] mintDataConfig
 * @category Instructions
 * @category UpdateMintConfig
 * @category generated
 */
export type UpdateMintConfigInstructionAccounts = {
    authority: web3.PublicKey;
    indexProtocolState: web3.PublicKey;
    mintDataConfig: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};

export const updateMintConfigInstructionDiscriminator = [
    243, 113, 184, 98, 212, 234, 198, 193,
];

/**
 * Creates a _UpdateMintConfig_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateMintConfig
 * @category generated
 */
export function createUpdateMintConfigInstruction(
    accounts: UpdateMintConfigInstructionAccounts,
    args: UpdateMintConfigInstructionArgs,
    programId = new web3.PublicKey(
        "indxL6jiTVfJL48JFdRu7Bz4WKXBQX1otGgvnvpsaPE",
    ),
) {
    const [data] = updateMintConfigStruct.serialize({
        instructionDiscriminator: updateMintConfigInstructionDiscriminator,
        ...args,
    });
    const keys: web3.AccountMeta[] = [
        {
            pubkey: accounts.authority,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: accounts.indexProtocolState,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.mintDataConfig,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false,
        },
    ];

    if (accounts.anchorRemainingAccounts != null) {
        for (const acc of accounts.anchorRemainingAccounts) {
            keys.push(acc);
        }
    }

    const ix = new web3.TransactionInstruction({
        programId,
        keys,
        data,
    });
    return ix;
}