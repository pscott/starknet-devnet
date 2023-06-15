"""UDC and its constants"""

import sys

from starkware.solidity.utils import load_nearby_contract
from starkware.starknet.services.api.contract_class.contract_class import (
    CompiledClassBase,
    DeprecatedCompiledClass,
)

from starknet_devnet.predeployed_contract_wrapper import PredeployedContractWrapper


class UDC(PredeployedContractWrapper):
    """Universal deployer contract wrapper class"""

    CONTRACT_CLASS: CompiledClassBase = None  # loaded lazily

    # Precalculated
    # HASH = compute_deprecated_class_hash(contract_class=UDC.get_contract_class())
    HASH = 0x7B3E05F48F0C69E4A65CE5E076A66271A527AFF2C34CE1083EC6E1526997A69

    # Precalculated to fixed address
    # ADDRESS = calculate_contract_address_from_hash(salt=0, class_hash=HASH,
    # constructor_calldata=[], deployer_address=0)
    ADDRESS = 0x41A78E741E5AF2FEC34B695679BC6891742439F7AFB8484ECD7766661AD02BF

    def __init__(self, starknet_wrapper):
        self.starknet_wrapper = starknet_wrapper
        self.address = self.ADDRESS
        self.class_hash = self.HASH

    @classmethod
    def get_contract_class(cls) -> CompiledClassBase:
        """Returns contract class via lazy loading."""
        if not cls.CONTRACT_CLASS:
            cls.CONTRACT_CLASS = DeprecatedCompiledClass.load(
                load_nearby_contract("UDC_OZ_0.5.0")
            )
        return cls.CONTRACT_CLASS

    @property
    def contract_class(self) -> CompiledClassBase:
        """Same as `get_contract_class`, used by `PredeployedContractWrapper` parent"""
        return self.get_contract_class()

    async def _mimic_constructor(self):
        pass

    def print(self):
        print("Predeployed UDC")
        print(f"Address: {hex(self.address)}")
        print(f"Class Hash: {hex(self.class_hash)}\n")
        sys.stdout.flush()
