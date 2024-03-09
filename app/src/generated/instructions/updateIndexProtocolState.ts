/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from "@solana/web3.js";
import * as beet from "@metaplex-foundation/beet";
import * as beetSolana from "@metaplex-foundation/beet-solana";

/**
 * @category Instructions
 * @category UpdateIndexProtocolState
 * @category generated
 */
export type UpdateIndexProtocolStateInstructionArgs = {
    newSuperAuthority: beet.COption<web3.PublicKey>;
    isPaused: beet.COption<boolean>;
    isOpen: beet.COption<boolean>;
};
/**
 * @category Instructions
 * @category UpdateIndexProtocolState
 * @category generated
 */
export const updateIndexProtocolStateStruct = new beet.FixableBeetArgsStruct<
    UpdateIndexProtocolStateInstructionArgs & {
        instructionDiscriminator: number[] /* size: 8 */;
    }
>(
    [
        ["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
        ["newSuperAuthority", beet.coption(beetSolana.publicKey)],
        ["isPaused", beet.coption(beet.bool)],
        ["isOpen", beet.coption(beet.bool)],
    ],
    "UpdateIndexProtocolStateInstructionArgs",
);
/**
 * Accounts required by the _updateIndexProtocolState_ instruction
 *
 * @property [_writable_, **signer**] superAuthority
 * @property [_writable_] indexProtocolState
 * @category Instructions
 * @category UpdateIndexProtocolState
 * @category generated
 */
export type UpdateIndexProtocolStateInstructionAccounts = {
    superAuthority: web3.PublicKey;
    indexProtocolState: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};

export const updateIndexProtocolStateInstructionDiscriminator = [
    22, 241, 220, 163, 98, 74, 245, 34,
];

/**
 * Creates a _UpdateIndexProtocolState_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateIndexProtocolState
 * @category generated
 */
export function createUpdateIndexProtocolStateInstruction(
    accounts: UpdateIndexProtocolStateInstructionAccounts,
    args: UpdateIndexProtocolStateInstructionArgs,
    programId = new web3.PublicKey(
        "indxL6jiTVfJL48JFdRu7Bz4WKXBQX1otGgvnvpsaPE",
    ),
) {
    const [data] = updateIndexProtocolStateStruct.serialize({
        instructionDiscriminator:
            updateIndexProtocolStateInstructionDiscriminator,
        ...args,
    });
    const keys: web3.AccountMeta[] = [
        {
            pubkey: accounts.superAuthority,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: accounts.indexProtocolState,
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
